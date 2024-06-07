const _ = require("lodash");
const request = require("request-promise");

const meliToken = "token";

function getNickNameString(sellerId) {
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
            return "El nickname del user es: " + res.nickname;
        })
        .catch(function (err) {
            console.error('No fue posible encontrar el sellerId', err);
        });
}

getNickNameString('132453365')
    .then(function (nickNameString) {
        console.log(nickNameString);
    });
