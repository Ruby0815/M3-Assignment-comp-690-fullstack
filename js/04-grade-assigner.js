let num1;
num1=parseInt(prompt("Please Enter number between 1 and 100"));
if(num1<1 || num1 > 100){
    alert ("please enter number only between 1 and 100");  

}
 else {   
 
switch(true) {
case  (num1 >= 60 && num1 <= 69):{
    console.log("You received a D");
    break;
}
case(num1 >= 70 && num1 <= 79):{
    console.log("You received a c");
    break;
}
case (num1 >= 80 && num1 <= 89):{
    console.log("You received a B");
    break;
}
case (num1 >= 90 && num1 <= 100):{
    console.log("You received a A");
    break;
}
default:
    console.log("You received a F")
}
 }