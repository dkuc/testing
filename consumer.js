const mq = require('./MessageQueue')();

const eventName = process.argv[2];

mq.connect()
    .then(() => mq.subscribe('MailServiceQueue', eventName, onEvalStarted));


function onEvalStarted(data) {
    console.log(`${eventName} event received: ${JSON.stringify(data)}`);
}
