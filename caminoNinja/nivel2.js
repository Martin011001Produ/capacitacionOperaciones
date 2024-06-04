const _ = require("lodash");

// 6) -------------------------------------------

(obj, parse) => {
    let partialProduct = parse(obj)

    const precioBase = 2000
    const stockBase = 4
    const stockTop = 20

    const aplicaCero = obj["Stock Default"] < stockBase
    let adicionado = obj["Precio Default"] * 1.14


    if (adicionado > precioBase) {
        partialProduct.prices = [
            {
                priceList: "default",
                amount: Math.round(parseFloat(obj["Precio Default"]) + 300)
            }
        ]
    }

    if (obj["Stock Default"] < stockBase) {
        partialProduct.stocks = [
            {
                priceList: "default",
                amount: 0
            }
        ]
    }
    partialProduct.stocks = [
        {
            warehouse: "default",
            quantity: aplicaCero ? 0 : obj["Stock Default"] > stockTop ? 100 : obj["Stock Default"]
        }
    ]


    if (_.includes(partialProduct.name, "guante")) {
        partialProduct.pictures.push({ url: "https://showsport.vteximg.com.br/arquivos/ids/319545/JDH-H30030000554-20-1-.jpg" })
    }

    return partialProduct
}

// 7) -------------------------------------------

(obj, parse) => {
    
    let partialProduct = parse(obj)

    let listaDeFotos = []

    listaDeFotos = obj["FOTOS"].split(",")

    //8) -------------------------------------------
    //Duda en actualizado o reemplazo
    //partialProduct.pictures.push(listaDeFotos.map())

    listaDeFotos.map(function(p) {
        return partialProduct.pictures.push({url:p})
    })

    return partialProduct
}



