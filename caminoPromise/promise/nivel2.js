const _ = require("lodash");
const request = require("request-promise");

const meliToken = "token";
const obj = {
    idVendedor: "",
    idItem: ""
}

function getSellerId(mla) {
    const options = {
        url: `https://api.mercadolibre.com/items/${mla}?include_attributes=all`,
        method: 'GET',
        json: true,
        headers: {
            'Authorization': 'Bearer ' + meliToken
        }
    };

    return request(options)
        .then(function (res) {
            obj.idVendedor = res.seller_id
            obj.idItem = mla
            return obj;
        })
        .catch(function (err) {
            console.error('No fue posible encontrar el MLA', err);
        });
}

getSellerId('MLA1135446827')
    .then(function (sellerId) {
        console.log(sellerId);
        console.log(obj)
    });
