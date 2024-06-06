const _ = require("lodash");
const request = require("request-promise");

const meliToken = "APP_USR-1138849081739375-060610-5c0947d250a09db96c73e9b229db9b45-132453365";

function getNickname(sellerId) {
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
            return res.nickname;
        })
        .catch(function (err) {
            console.error('No fue posible encontrar el sellerId', err);
        });
}

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
            return "El nickname del user es: " + res.nickname;
        })
        .catch(function (err) {
            console.error('No fue posible encontrar el sellerId', err);
        });
}

getNickname('132453365')
    .then(function (nickName) {
        console.log(nickName);
    });

getNicknameString('132453365')
    .then(function (nickNameString) {
        console.log(nickNameString);
    });
