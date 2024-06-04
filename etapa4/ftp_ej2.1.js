function ej (obj, parse) {

    partialProduct = parse(obj)

    const iva = 1.21

    partialProduct.prices = [
        {
            priceList: "default",
            amount: parseFloat(obj[7]) * iva
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

