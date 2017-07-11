'use strict';
const amqp = require('amqplib');
const exchangeName = 'insights_events';


module.exports = function () {
    let connection = null;
    let channel = null;

    function subscribe(queueName, type, callback) {
        return channel.assertQueue(queueName, {exclusive: false})
            .then(q => channel.bindQueue(q.queue, exchangeName, type)
                .then(() => channel.consume(q.queue, msg => {
                        callback(JSON.parse(msg.content));
                    },{noAck:true})
                )
            );
    }

    function publish(type, data) {
        return channel.publish(exchangeName, type, new Buffer(JSON.stringify(data)));
    }


    function connect() {
        return amqp.connect('amqp://172.30.89.123')
            .then(conn => conn.createChannel()
                .then(ch => ch.assertExchange(exchangeName, 'direct', {durable: true})
                    .then(() => {
                        connection = conn;
                        channel = ch;
                    })
                )
            );
    }

    function close() {
        return channel.close()
            .then(() => connection.close())
    }

    return {connect, close, publish, subscribe}
};
