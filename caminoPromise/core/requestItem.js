const _ = require("lodash");
const request = require("request-promise");

const meliToken = "token";

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
