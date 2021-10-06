// Table 

var args = process.argv.slice(2)

var argument1 = parseInt(process.argv[2])

function multiply (number){

    if(number === undefined || number === null){
        console.log('Error');
        console.log('');
    }
    else{
        for(let i = 0; i <= 10; i++){
            console.log(number * i);
        }
        console.log('');
        console.log('');
    }
}

module.exports = {
    multiply
}