const mq = require('./MessageQueue')();

const eventName = 'EvalStarted';//process.argv[2];

mq.connect()
    .then(()=> console.log('Started MQ'))
    .then(() => mq.subscribe('MailServiceQueue', eventName, onEvalStarted));


function onEvalStarted(data) {
    console.log(`${eventName} event received: ${JSON.stringify(data)}`);
}
