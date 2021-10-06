var multiplyNumbers = require('./multiply')

function addition (num){

    if(num === undefined || num === null){
        console.log('Error');
    }
    else{
        for(let i = 0; i <= 10; i++){
            console.log(num + i);
        }
        console.log('');
        console.log('');
    }
}

module.exports = {
    addition
}