const _ = require("lodash");
const request = require("request-promise");

const meliToken = "APP_USR-1138849081739375-060715-0295e7506118dfbd42d81747a8a2717d-132453365"; 

function getNicknameString(sellerId) {
    const options = {
        url: `https://api.mercadolibre.com/users/${sellerId}`,
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
            console.error('No fue posible encontrar el sellerId', err);
        });
}

module.exports = getNicknameString