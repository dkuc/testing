const mq = require('./MessageQueue')();

const eventName = 'EvalStarted';

mq.connect()
    .then(() => mq.subscribe('MailServiceQueue', eventName, onEvalStarted));


function onEvalStarted(data) {
    console.log(`${eventName} event received: ${JSON.stringify(data)}`);
}
