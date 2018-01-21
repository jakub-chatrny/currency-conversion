import React, {Component} from 'react';
import fetch from '../fetch';


export default class CurrencyConverter extends Component {
    state = {
        stats: null,
    };
    componentDidMount() {
        try {
            fetch('stats')
                .then((data) => this.setState({stats: data}));
        } catch (error) {
            console.error(error);
        }

    }
    render() {
        const {stats} = this.state;
        return (
            stats && [
                <p key="conversionNumber">This is conversion number <code>{stats.conversionNumber}</code>.</p>,
                <p key="convertedAmountUSD">Totally converted <code>{stats.convertedAmountUSD}</code> USD.</p>,
                <p key="popularConversion">Most popular conversion is <code>{stats.popularConversion}</code> .</p>,
            ]
        )
    }
};