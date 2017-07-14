'use strict';

if(process.env.ROLE === 'consumer'){
    console.log('starting consumer');
    require('./consumer');
}
else if(process.env.ROLE === 'producer'){
    console.log('starting producer');
    require('./producer');
}else {
    console.error('No ROLE specified')
}