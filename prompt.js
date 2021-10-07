var prompt = require('prompt');

var mysteryNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);

prompt.start();

function randomNumber (num){

  prompt.get({ name: "answer",description: "Devine le Nombre Mystère" }, function (err, result) {

    if(result.answer < num){
      console.log("Ta réponse est trop basse");
      randomNumber(num)
    }
    else if (result.answer > num){
      console.log("Ta réponse est trop haute");
      randomNumber(num)
    }
    else{
      console.log("Bravo t'as trouvé");
    }
  });
} 
randomNumber(mysteryNum)