const _ = require("lodash");
const request = require("request-promise");

const meliToken = "token";

const urls = {
    seller: "https://api.mercadolibre.com/users/",
    item: "https://api.mercadolibre.com/items/"
}

function getUrl(nombre, id) {
    console.log(urls[nombre] + id)
    return urls[nombre] + id
}

function getRequest(url) {
    const options = {
        url: url,
        method: 'GET',
        json: true,
        headers: {
            'Authorization': 'Bearer ' + meliToken
        }
    };

    return request(options)
}

getRequest(getUrl("item", 'MLA1135446827'))
    .then(function (res) {
        getRequest(getUrl("seller", res.seller_id))
            .then(function (res) {
                console.log("El dueño dle producto es: " + res.nickname)
            }).catch(function (err) {
                console.log(err.message)
            })

    })


