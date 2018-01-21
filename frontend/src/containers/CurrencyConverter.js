import React, {Component} from 'react';
import {Form, Text, Select} from 'react-form';

export default class CurrencyConverter extends Component {
    constructor() {
        super();
        this.state = {
            options: {currencies: []},
            convertedValue: null,
        };
        this.submitForm = this.submitForm.bind(this);
    }
    enumsToOptions(enums) {
        return Object.keys(enums).map(
            (enumKey) => enums[enumKey].reduce(
                (acc, item) => {acc.push({label: item, value: item}); return acc},
                [],
            )
        );
    }
    componentDidMount() {
        try {
            let response = fetch('http://localhost:9999/api/enums', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    credentials: 'cross-origin',
                },
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({options: data}, () => console.log(this.state.options));
                return data;
            })
            .catch((error) => {
                console.log('ERR', error);
                return error;
            });
            return response.value;
        } catch (error) {
            console.error(error);
        }
    }
    submitForm({value, srcCurrency, dstCurrency}) {
        try {
            return fetch(`http://localhost:9999/api/convert?value=${value}&srcCurrency=${srcCurrency}&dstCurrency=${dstCurrency}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    credentials: 'cross-origin',
                },
            })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({convertedValue: data.convertedValue});
                return data;
            })
            .catch((error) => {
                console.log('ERR', error);
                return error;
            });
        } catch (error) {
            console.error(error);
        }
    }
    render() {
        const {convertedValue, options} = this.state;
        return (
            <div>
                <Form onSubmit={this.submitForm}
                      defaultValues={{
                          value: 1,
                          srcCurrency: 'EUR',
                          dstCurrency: 'CZK',
                      }}
                >
                    { formApi => (
                        <form onSubmit={formApi.submitForm} id="form2">
                            <div>
                                <label for="value">
                                    Amount:
                                </label>
                                <Text
                                    field='value'
                                    id='value'
                                />
                            </div>
                            <div>
                                <label for="srcCurrency">
                                    From:
                                </label>
                                <Select
                                    field="srcCurrency"
                                    id="srcCurrency"
                                    options={options ? options.currencies : []}
                                />

                            </div>
                            <div>
                                <label for="dstCurrency">
                                    To:
                                </label>
                                <Select
                                    field="dstCurrency"
                                    id="dstCurrency"
                                    options={options ? options.currencies : []}
                                />
                            </div>
                            <div>
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