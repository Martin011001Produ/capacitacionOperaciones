const _ = require("lodash");
const request = require("request-promise");

const tokenProdu = "Bearer aa02a6cd698248874f743a70088ce85228fbb90d";

function getSalesOrder(salesOrderId) {
    const options = {
        url: `https://apps.producteca.com/api/salesorders/${salesOrderId}`,
        method: 'GET',
        json: true,
        headers: {
            'Authorization': tokenProdu
        }
    };

    return request(options)
        .then(function (res) {
            return {
                sku: res.lines[0].variation.sku,
                MLA: "",
                productId: res.lines[0].product.id
            };
        })
        .catch(function (err) {
            console.error('No fue posible encontrar la venta', err);
        });
}


module.exports = { getSalesOrder };
