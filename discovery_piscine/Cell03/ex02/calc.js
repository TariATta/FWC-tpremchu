$(document).ready(function() {
    $('#calcBtn').click(function() {
        let left = $('#left').val();
        let right = $('#right').val();
        let op = $('#operator').val();

        let isLeftValid = /^\d+$/.test(left);
        let isRightValid = /^\d+$/.test(right);

        let a = parseInt(left, 10);
        let b = parseInt(right, 10);

        if (!isLeftValid || !isRightValid || isNaN(a) || isNaN(b) || a < 0 || b < 0) {
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
    });

    setInterval(function() {
        alert("Please, use me...");
    }, 30000);
});