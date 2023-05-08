function calculate() {
    let input = document.getElementById("input").value;
    let operator = "";
    let num1 = "";
    let num2 = "";
    let result = "";

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "+" || input[i] === "-" || input[i] === "*" || input[i] === "/") {
            operator = input[i];
        } else {
            if (operator === "") {
                num1 += input[i];
            } else {
                num2 += input[i];
            }
        }
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById("result").innerHTML = result;
}
