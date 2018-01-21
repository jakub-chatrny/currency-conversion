import React, {Component} from 'react';
import {Form, Text, Select} from 'react-form';
import fetch from '../fetch';
import './CurrencyConverter.css';

export default class CurrencyConverter extends Component {
    constructor() {
        super();
        this.state = {
            options: {currencies: []},
            convertedValue: null,
        };
        this.submitForm = this.submitForm.bind(this);
    }
    componentDidMount() {
        fetch('enums')
            .then((data) => this.setState({options: data}))
            .catch((error) => console.error(error));
    }
    submitForm(params) {
        fetch('convert', params)
            .then((data) => this.setState({convertedValue: data.convertedValue}))
            .catch((error) => console.error(error));
    }
    render() {
        const {convertedValue, options} = this.state;
        return (
            <div>
                <h2>
                    Convert:
                </h2>
                <Form
                    onSubmit={this.submitForm}
                    defaultValues={{
                      value: 1,
                      srcCurrency: 'EUR',
                      dstCurrency: 'CZK',
                    }}
                >
                    { formApi => (
                        <form
                            className="Currency-converter-form"
                            onSubmit={formApi.submitForm} id="form2"
                        >
                            <div>
                                <label htmlFor="value">
                                    Amount:
                                </label>
                                <Text
                                    field='value'
                                    id='value'
                                />
                            </div>
                            <div>
                                <label htmlFor="srcCurrency">
                                    From:
                                </label>
                                <Select
                                    field="srcCurrency"
                                    id="srcCurrency"
                                    options={options ? options.currencies : []}
                                />

                            </div>
                            <div>
                                <label htmlFor="dstCurrency">
                                    To:
                                </label>
                                <Select
                                    field="dstCurrency"
                                    id="dstCurrency"
                                    options={options ? options.currencies : []}
                                />
                            </div>
                            <div>
                                <label />
                                <button
                                    type="submit"
                                >
                                    Convert
                                </button>
                            </div>
                        </form>)
                    }
                </Form>
                <div style={{textAlign: 'center', marginTop: '10px'}} >
                    {
                        convertedValue && `Converted Amount: ${convertedValue}`
                    }
                </div>
            </div>
        )
    }
};