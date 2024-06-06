const _ = require("lodash");
const request = require("request-promise");

const { getItem } = require('./core/requestItem.js');
const { getNicknameString } = require('./core/requestUser.js');

async function nickname (){
    try {
        let item = await getItem('MLA1135446827');
        console.log(item.seller_id);

        let nickname = await getNicknameString(item.seller_id);
        console.log(nickname);
    } catch (error) {
        console.error('Error:', error);
    }
}

nickname()