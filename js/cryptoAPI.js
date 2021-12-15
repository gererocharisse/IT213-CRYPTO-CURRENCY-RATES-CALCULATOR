const proxyURL = "https://romel-acopra.herokuapp.com/";

class CryptoAPI {

    // Query the REST API
    async queryAPI(currency, cryptocurrency) {

    const url = await fetch(`${proxyURL}https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=1&id=${cryptocurrency}&convert=${currency}&CMC_PRO_API_KEY=813fa56a-1128-49b1-a7d1-3083a573f6ad`);

        const result = await url.json();

        return {
            result
        }
    }

    async getCryptoCurrenciesList() {
        const url = await  fetch(`${proxyURL}https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=813fa56a-1128-49b1-a7d1-3083a573f6ad`);

        const cryptoCurrencies = await url.json();

        return {
            cryptoCurrencies
        }
    }
}