function ej (obj, parse) {

    partialProduct = parse(obj)

    partialProduct.prices = [
        {
            priceList: "default",
            amount: parseFloat(obj[7])
        }
    ]

    partialProduct.stocks = [
        {
            warehouse: "default",
            quantity: parseFloat(obj[8])
        }
    ]
    
    partialProduct.$updatableProperties = ["stocks", "prices"]
    return partialProduct;
}

//Duda actualzacion stocks, al tener sku codigo