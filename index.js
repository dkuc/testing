'use strict';
const  P = require('bluebird');

let i = 0;
function printMessage() {
    console.log(i++);
    return P.delay(1000).then(printMessage);
}

printMessage();