const _ = require("lodash");
const request = require("request-promise");
const Promise = require("bluebird")

const meliToken = "token";

function getSellerId(mla1, mla2) {

    const msjIguales = "Ambos MLA son del mismo seller: 1 "
    const msjdif = "Los MLA pertenecen a diferentes seller's:"

    const options = (mla) => {
        return {
            url: "https://api.mercadolibre.com/items/" + mla,
            method: 'GET',
            json: true,
            headers: {
                'Authorization': 'Bearer ' + meliToken
            }
        }

    }

    return Promise.all([request(options(mla1)), request(options(mla2))])
        .then(function ([res1, res2]) {
            return res1.seller_id == res2.seller_id ? msjIguales + res1.seller_id + ", 2 " + res1.seller_id : msjdif + res1.seller_id + ", 2 " + res1.seller_id;
        })
        .catch(function (err) {
            console.error('No fue posible el/los MLA', err);
        });
}

getSellerId('MLA1135446827', 'MLA642014504')
    .then(function (sellerId) {
        console.log(sellerId);
    });
