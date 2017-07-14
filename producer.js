'use strict';
const mq = require('./MessageQueue')();
const P = require('bluebird');

mq.connect()
    .then(() => publishMessage());


let i = 0;
function publishMessage() {
    mq.publish('EvalStarted', {account_number: i++});
    console.log('sent EvalStarted event');
    return P.delay(5000).then(publishMessage);
}


