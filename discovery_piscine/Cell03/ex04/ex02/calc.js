function calculate() {
    let left = document.getElementById("left").value;
    let right = document.getElementById("right").value;
    let op = document.getElementById("operator").value;

    let a = parseInt(left, 10);
    let b = parseInt(right, 10);

    if (isNaN(a) || isNaN(b) || a < 0 || b < 0) {
        alert("Error :(");
        console.log("Error :(");
        return;
    }

    if ((op === "/" || op === "%") && b === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;
    switch(op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
        case "%": result = a % b; break;
    }

    alert(result);
    console.log(result);
}

setInterval(function() {
    alert("Please, use me...");
}, 30000);