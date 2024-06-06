const _ = require("lodash");
const request = require("request-promise");

const meliToken = "APP_USR-1138849081739375-060610-5c0947d250a09db96c73e9b229db9b45-132453365";

function getItem(mla) {
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
            return res;
        })
        .catch(function (err) {
            console.error('No fue posible encontrar el MLA', err);
        });
}


module.exports = { getItem };
