const P = require('bluebird');


function loop() {
    console.log('Ping');
    return P.delay(10000).then(loop);
}

loop();