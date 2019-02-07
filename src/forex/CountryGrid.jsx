import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class FXCountryGrid extends Component {
    constructor(props) {
        super(props);
        var me = this;
        me.state = {
            imgSize: 16,
            forExData: [],
            countryList: {
                INR: "in",
                USD: "us",
                GBP: "gb",
                JPY: "jp",
                CAD: "ca",
                CHF: "ch",
                AUD: "au",
                NZD: "nz",
                RUB: "ru",
                ZAR: "za",
                MXN: "mx",
                BRL: "br"
            }
        }
    }
    componentDidMount() {
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
        .then(response => response.json())
        .then(data => {
            this.setState({date: data.date});
            this.makeForexData(data);
        }).catch(reason => {console.log(reason)});
    }

    makeForexData = (data) => {
        const {countryList} = this.state;
        let forExData = [];
        let rates = data.rates;

        if (!rates) {
            return;
        }
        for (let i in countryList) {
            let obj = {
                countryCode: i
            }
            for (let j in countryList) {
                obj[j] = {};
                obj[j]["direct"] = (rates[j]/rates[i]).toFixed(4);
                obj[j]["inverse"] = (rates[i]/rates[j]).toFixed(4);
            }
            forExData.push(obj);
        }

        this.setState({ forExData });

    }

    getImage = (countryCode, size) => {
        size = size || this.state.imgSize;
        let src = "https://www.countryflags.io/" + countryCode + "/flat/" + size+ ".png"
        return <img src={src} alt={countryCode}/>;
    }

    getGridColumns = () => {
        let columns = [];
        const { countryList } = this.state;
        columns.push({
            Header: '',
            width: 150,
            accessor: 'countryCode',
            Cell: row => (
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        height: "100%"
                    }}
                >
                {this.getImage(countryList[row.value], 32)}
                &nbsp;&nbsp;<div>1 {row.value} =<br/>
                Inverse:</div>
                </div>
            )
        });
        for (let i in countryList) {
            let obj = {
                accessor: i
            };
            obj.Header = () => (<span>{i} &nbsp;&nbsp;{this.getImage(countryList[i])}</span>);
            obj.Cell = row => (
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        height: "100%"
                    }}
                >
                {row.value.direct}<br/>
                {row.value.inverse}
                </div>
            )
            columns.push(obj);
        }
        return columns;
    }

    render() { 
        const columns = this.getGridColumns();
        return <React.Fragment>
        <b>ForEx Date:</b> {this.state.date}
        <ReactTable
            data={this.state.forExData}
            columns={columns}
            defaultPageSize={10}
            getTrProps={(state, rowInfo) => {
                if (rowInfo && rowInfo.row) {
                    return {
                        style: {
                            background: 'black',
                            color: 'white'

                        }
                    }
                } else {
                    return {}
                }
            }}
            className="stripped highlight"
        />
        </React.Fragment>
    }
}
 
export default FXCountryGrid;