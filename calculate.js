// Calculator

var argument1 = parseInt(process.argv[2])
var operateur = process.argv[3]
var argument2 = parseInt(process.argv[4])

function calculate (num1,num2,ope){
    if(ope === '+'){
        console.log(num2 + num1);
    }
    else if (ope === '-'){
        console.log(num1 - num2);
        console.log(num2 - num1);
    }
    else if (ope === 'div'){
        console.log(num1 / num2);
        console.log(num2 / num1);
    }
    else if (ope === 'x'){
        console.log(num1 * num2);
    }
    else if (ope === '%'){
        console.log(num1 % num2);
        console.log(num2 % num1);
    }
    else{
        console.log('Error');
    }
}
console.log(process.argv);
calculate(argument1, argument2, operateur)
