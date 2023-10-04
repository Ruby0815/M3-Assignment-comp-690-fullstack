let coinFlip;
let randomNum1 = Math.round(Math.random())
console.log(randomNum1);
let choice=prompt(`please enter  “heads or tails”`).toLowerCase();

if(randomNum1 < 0.5){
    coinFlip='heads' ;
    console.log(randomNum1);
    console.log(coinFlip);
}else if(randomNum1> 0.5){
    coinFlip='tails' ;
    console.log(randomNum1);
    console.log(coinFlip);
}

//for result
if ( coinFlip ===`heads` && choice ===`heads`){
    alert(`The flip was heads and you chose heads...you win!`)
} 
else if( coinFlip ===`heads` && choice ===`tails`){
        alert(`The flip was heads but you chose tails...you lose!`)
 }
 else if ( coinFlip ===`tails` && choice ===`heads`){
    alert(`The flip was tails but you chose heads...you lose!`)
 }
 else if ( coinFlip ===`tails` && choice ===`tails`){
    alert(`The flip was tails and you chose tails...you win!`)
 }
else{
    alert('Invalid entry. Please enter "heads" or "tails".');
}
