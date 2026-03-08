function exchange(sumUAH, currencyValues, exchangeCurrency) {
    if (exchangeCurrency === 'USD') {
      let USD = sumUAH / currencyValues[0].value;
      console.log(USD);
    }
    if (exchangeCurrency === 'EUR') {
        let EUR = sumUAH / currencyValues[1].value;
        console.log(EUR);
    }
}
exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')