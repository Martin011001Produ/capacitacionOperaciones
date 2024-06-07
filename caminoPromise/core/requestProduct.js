const _ = require("lodash");
const request = require("request-promise");

const tokenProdu = "Bearer c909f0353664cfca83fc15c75e500e55e4639dcf";

function getProduct(obj) {
    const options = {
        url: `https://apps.producteca.com/api/products/${obj.productId}`,
        method: 'GET',
        json: true,
        headers: {
            'Authorization': tokenProdu
        }
    };

    return request(options)
        .then(function (res) {
            return Object.assign(obj, {MLA: res.integrations.find(i => i.app == 2).integrationId})
        })
        .catch(function (err) {
            console.error('No fue posible encontrar la venta', err);
        });
}


module.exports = getProduct
