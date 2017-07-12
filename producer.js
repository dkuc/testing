
const mq = require('./MessageQueue')();

mq.connect()
    .then(() => mq.publish('EvalStarted', {account_number: 540155}))
    .then(() => mq.close());
