'use strict';

if(process.env.ROLE === 'consumer'){
    console.log('starting consumer');
    require('./consumer');
}
else if(process.env.ROLE === 'producer'){
    console.log('starting producer');
    require('./producer');
}else if(process.env.ROLE === 'blank'){
    console.log('starting blank');
    require('./blank');
}else {
    console.error('No ROLE specified')
}