const _ = require("lodash");

// 1) -------------------------------------------

(obj, parse) => {
    let partialProduct = parse(obj)

    return partialProduct
}

// 2) -------------------------------------------

(obj, parse) => {
    let partialProduct = parse(obj)

    const adicional = 100

    partialProduct.prices = [
        {
            priceList: "default",
            amount: parseFloat(obj["Precio Default"]) + adicional
        }
    ]

    partialProduct.stocks = [
        {
            warehouse: "default",
            quantity: parseInt(obj["Stock Default"]) / 2
        }
    ]

    return partialProduct
}

// 3) -------------------------------------------

(obj, parse) => {
    let partialProduct = parse(obj)

    const iva = 1.21

    partialProduct.prices = [
        {
            priceList: "default",
            amount: Math.round(parseFloat(obj["Precio Default"]) * iva)
        }
    ]

    partialProduct.stocks = [
        {
            warehouse: "default",
            quantity: Math.floor(parseInt(obj["Stock Default"]) / 2)
        }
    ]

    return partialProduct
}

// 4) -------------------------------------------

(obj, parse) => {
    let partialProduct = parse(obj)

    const precioBase = 2000
    const stockBase = 4

    if (obj["Precio Default"] > precioBase) {
        partialProduct.prices = [
            {
                priceList: "default",
                amount: Math.round(parseFloat(obj["Precio Default"]) + 300)
            }
        ]
    }

    if (obj["Precio Default"] < stockBase) {
        partialProduct.prices = [
            {
                warehouse: "default",
                quantity: 0
            }
        ]
    }

    return partialProduct
}

// 5) -------------------------------------------

(obj, parse) => {
    let partialProduct = parse(obj)

    const iva = 1.21
    const adicional = 1.15
    let priceProduct = Math.round(parseFloat(obj["Precio Default"]) * iva)

    partialProduct.prices = [
        {
            priceList: "default",
            amount: _.round(priceProduct)
        },
        {
            priceList: "PremiumYAhora12",
            amount: _.round(priceProduct * adicional)
        }
    ]

    return partialProduct
}
