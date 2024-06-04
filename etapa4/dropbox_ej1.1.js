function ej (obj, parse) {

    partialProduct = parse(obj)

    const marcas = ["Newsport"]

    if (marcas.includes(partialProduct.brand)) {
        return null
    }

    partialProduct.prices = [
        {
            priceList: "default",
            amount: obj["Precio Default"]
        }
    ]

    partialProduct.stocks = [
        {
            warehouse: "default",
            quantity: obj["Stock Default"],
        }
    ]
    
    partialProduct.$updatableProperties = ["stocks", "prices","attributes","pictures","name","notes","brand","barcode","size","color"]
    return partialProduct
}


