const _ = require("lodash");
const request = require("request-promise");
const Promise = require("bluebird")

const getSalesOrder = require('../core/requestSalesOrder.js');
const getProduct = require('../core/requestProduct.js');

const listOrders = [
    "133850320",
    "133849131",
    "133847981",
    "133846190",
    "133845947",
    "133844247",
    "133842843",
    "133842489",
    "133841694",
    "133841377",
    "133840485",
    "133839663",
    "133838638",
    "133838406",
    "133838382",
    "133838319",
    "133838262",
    "133838235",
    "133837946",
    "133837790",
]

function getSalesOrdersInfo(listOrders) {
    let list = []
    return Promise.map(listOrders, salesOrderId => getSalesOrder(salesOrderId))
        .then(function (listRes) {
            list = listRes;
            Promise.map(listRes, obj => getProduct(obj))
                .then(function (products) {
                    console.log(products)
                })
        }).catch("No se encontraron ventas")
}

getSalesOrdersInfo(listOrders).then()

