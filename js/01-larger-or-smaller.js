let n1, n2;
n1 = parseInt(prompt("Enter first number"));
n2 = parseInt(prompt("Enter second number"));
if (!isNaN(n1) && !isNaN(n2)) {
    if (n1 > n2) {
        document.write(`<h1>First number is greater than second number: ${n1}<\h1>`);
    } else if (n2 > n1) {
        document.write(`<h1>Second number is greater than first number: ${n2}<\h1>`);
    } else {
        document.write(`<h1>Both number are Equal<\h1>`);
    }
}
else {
    document.write("<h1>Invalid input. Please enter valid integers.</h1>");
}  
