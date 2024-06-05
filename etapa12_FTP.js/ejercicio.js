const _ = require("lodash");

// 5) -------------------------------------------

function ej(salesOrder) {

    let idVentaMeli = _.get(salesOrder, "integrations[0].integrationId")
    let cart = _.get(salesOrder, "cartId")
    let id = cart != null ? cart : idVentaMeli

    return "ML-" + id + ".json";
}

// 6) -------------------------------------------

function ej(salesOrder, parser) {
    
    let ventaFinal = parser(salesOrder);
    
    const prefijos = ["FULL-"]
    let sku = _.get(salesOrder, "lines[0].variation.sku")

    if (prefijos.find(prefijo => _.startsWith(sku, prefijo))) {
        ventaFinal.Lines[0].Sku = sku.split("-")[1]
    }

    return ventaFinal;
}


// 7) -------------------------------------------

function ej(salesOrder, parser) {

    let ventaFinal = parser(salesOrder);

    let billingInfo = {
        "docType": _.get(salesOrder, "contact.billingInfo.docType") || "DNI",
        "docNumber": _.get(salesOrder, "contact.billingInfo.docNumber") || "39117490",
        "streetName": _.get(salesOrder, "contact.billingInfo.streetName") || "Poeta Aguero",
        "streetNumber": _.get(salesOrder, "contact.billingInfo.streetNumber") || "350",
        "zipCode": _.get(salesOrder, "contact.billingInfo.zipCode") || "5881",
        "city": _.get(salesOrder, "contact.billingInfo.city") || "Merlo",
        "state": _.get(salesOrder, "contact.billingInfo.state") || "San Luis",
        "firstName": _.get(salesOrder, "contact.billingInfo.firstName") || "Gabriel",
        "lastName": _.get(salesOrder, "contact.billingInfo.lastName") || "Benitez"
    }

    ventaFinal.Contact.BillingInfo = billingInfo

    return ventaFinal;
}
