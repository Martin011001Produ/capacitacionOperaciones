const _ = require("lodash");

// 10) -------------------------------------------

(obj, parse) => {

    let partialProduct = parse(obj)

    let partialProducts = [
        {
            sufijo:"-PR",
            multi: 1.25
        }
    ].map(function(prop){
        let newObj = _.cloneDeep(partialProduct)
        newObj.sku += prop.sufijo
        newObj.prices[0].amount *= prop.multi 
        return newObj
    })  
    //duda
    partialProducts.push(partialProduct)

    return partialProducts
}

// 11) -------------------------------------------

(obj, parse) => {

    let partialProduct = parse(obj)

    let partialProducts = [
        {
            sufijo:"1",
            multi: 1
        },
        {
            sufijo:"X2",
            multi: 2
        },
        {
            sufijo:"X4",
            multi: 4
        },
        {
            sufijo:"X6",
            multi: 6
        },
        {
            sufijo:"X12",
            multi: 12
        }
    ].map(function(prop){
        let newObj = _.cloneDeep(partialProduct)
        newObj.sku = newObj.sku + prop.sufijo
        newObj.prices[0].amount *= prop.multi 
        newObj.stocks[0].quantity /= prop.multi 
        return newObj
    })  
    //duda
    partialProducts.push(partialProduct)

    return partialProducts
}