const _ = require("lodash");
const request = require("request-promise");

const getItem = require('../core/requestItem.js');
const getNicknameString = require('../core/requestUser.js');

function nickname() {

    return getItem('MLA1135446827')
        .then(function (item) {
            getNicknameString(item.seller_id)
                .then(function ({nickname}) {
                    console.log(nickname);
                })
        }).catch(function (err) {
            console.log(err)
        })
}

nickname().then()