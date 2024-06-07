const _ = require("lodash");
const request = require("request-promise");

const tokenProdu = "Bearer token";

function getProduct(productId) {
    const options = {
        url: `https://apps.producteca.com/api/products/${productId}`,
        method: 'GET',
        json: true,
        headers: {
            'Authorization': tokenProdu
        }
    };

    return request(options)
        .then(function (res) {
            return {MLA: res.integrations.find(i => i.app == 2).integrationId};
        })
        .catch(function (err) {
            console.error('No fue posible encontrar la venta', err);
        });
}


module.exports = { getProduct };
