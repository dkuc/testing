
const mq = require('./MessageQueue')();

mq.connect()
    .then(() => mq.publish('big', {account_number: 540155}))
    .then(() => mq.close());
