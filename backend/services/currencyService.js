const fetch = require('node-fetch');

const {CURRENCY_DEFAULT_API} = require('./constatns');

const covertFunction = (value, rate) => value * rate;

const getLatestRates = async (baseCurrency, api = CURRENCY_DEFAULT_API) => {
    try {
        return fetch(api + baseCurrency, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .catch((error) => {
            console.log('ERR', error);
            return error;
        });
    } catch (error) {
        console.error(error);
    }
};

const convert = async (value, srcCurrency, dstCurrency, api) => {
    const latest = await getLatestRates(srcCurrency, api);
    return covertFunction(
        value,
        latest.rates[dstCurrency]
    );
};

module.exports = {getLatestRates, convert};