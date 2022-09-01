function myScope() {
    
    let screen = document.getElementById("screen");
    let clearButton = document.getElementById("clearButton");
    let divButton = document.getElementById("divButton");
    let multButton = document.getElementById("multButton");
    let sumButton = document.getElementById("sumButton");
    let subButton = document.getElementById("subButton");
    let equalsButton = document.getElementById("equalsButton");
    let oneButton = document.getElementById("oneButton");
    let twoButton = document.getElementById("twoButton");
    let threeButton = document.getElementById("threeButton");
    let fourButton = document.getElementById("fourButton");
    let fiveButton = document.getElementById("fiveButton");
    let sixButton = document.getElementById("sixButton");
    let sevenButton = document.getElementById("sevenButton");
    let eightButton = document.getElementById("eightButton");
    let nineButton = document.getElementById("nineButton");
    let zeroButton = document.getElementById("zeroButton");
    let doubleZeroButton = document.getElementById("doubleZeroButton");
    let dotButton = document.getElementById("dotButton");
    let themeButton = document.getElementById("themeButton");

    let operation = "";

    oneButton.onclick = () => screen.innerHTML += "1";
    twoButton.onclick = () => screen.innerHTML += "2";
    threeButton.onclick = () => screen.innerHTML += "3";
    fourButton.onclick = () => screen.innerHTML += "4";
    fiveButton.onclick = () => screen.innerHTML += "5";
    sixButton.onclick = () => screen.innerHTML += "6";
    sevenButton.onclick = () => screen.innerHTML += "7";
    eightButton.onclick = () => screen.innerHTML += "8";
    nineButton.onclick = () => screen.innerHTML += "9";
    zeroButton.onclick = () => screen.innerHTML += "0";
    doubleZeroButton.onclick = () => screen.innerHTML += "00";
    dotButton.onclick = () => screen.innerHTML += ",";
    equalsButton.onclick = showResult;
    sumButton.onclick = function (){
        if (operation === "") {
            operation = "+";
            return screen.innerHTML += operation;
        }
        showResult();
        operation = "+";
        screen.innerHTML += operation;
    };
    subButton.onclick = function (){
        if (operation === "") {
            operation = "-";
            return screen.innerHTML += operation;
        }
        showResult();
        operation = "-";
        screen.innerHTML += operation;
    };
    multButton.onclick = function (){
        if (operation === "") {
            operation = "x";
            return screen.innerHTML += operation;
        }
        showResult();
        operation = "x";
        screen.innerHTML += operation;
    };
    divButton.onclick = function (){
        if (operation === "") {
            operation = "÷";
            return screen.innerHTML += operation;
        }
        showResult();
        operation = "÷";
        screen.innerHTML += operation;
    };
    clearButton.onclick = () => screen.innerHTML = "";
    function showResult(){
        let sentence = screen.innerHTML;
        sentence = sentence.replace(",", ".").replace(",", ".").split(operation);
        let resultado = (selectOperation(operation, sentence[0], sentence[1])).toFixed(5);
        if (resultado.endsWith("0")) {
            resultado = endsZero(resultado);
        }
        screen.innerHTML = resultado;
        operation = "";
    };

    themeButton.onclick = function () {
        document.querySelector(".calculator").classList.toggle("active");
        document.querySelector("body").classList.toggle("active");
        document.querySelector("#sevenButton").classList.toggle("active");
        document.querySelector("#eightButton").classList.toggle("active");
        document.querySelector("#nineButton").classList.toggle("active");
        document.querySelector("#fourButton").classList.toggle("active");
        document.querySelector("#fiveButton").classList.toggle("active");
        document.querySelector("#sixButton").classList.toggle("active");
        document.querySelector("#oneButton").classList.toggle("active");
        document.querySelector("#twoButton").classList.toggle("active");
        document.querySelector("#threeButton").classList.toggle("active");
        document.querySelector("#zeroButton").classList.toggle("active");
        document.querySelector("#doubleZeroButton").classList.toggle("active");
        document.querySelector("#dotButton").classList.toggle("active");
        document.querySelector("#divButton").classList.toggle("active");
        document.querySelector("#multButton").classList.toggle("active");
        document.querySelector("#subButton").classList.toggle("active");
        document.querySelector("#sumButton").classList.toggle("active");
        document.querySelector("#equalsButton").classList.toggle("active");
        document.querySelector("#clearButton").classList.toggle("active");
        document.querySelector("#screen").classList.toggle("active");
        themeButton.classList.toggle("active");
    }

}

function selectOperation(operation, firstValue, sencondValue) {
    if (operation === "+") {
        return parseFloat(firstValue) + parseFloat(sencondValue);
    }

    if (operation === "-") {
        return parseFloat(firstValue) - parseFloat(sencondValue);
    }

    if (operation === "x") {
        return parseFloat(firstValue) * parseFloat(sencondValue);
    }

    if (operation === "÷") {
        return parseFloat(firstValue) / parseFloat(sencondValue);
    }

}

function endsZero(resultado) {
    let endsZero = true;
    do {
        resultado = resultado.substring(0, resultado.length - 1);
        endsZero = resultado.endsWith("0");
    } while (endsZero === true);
    if (resultado.endsWith(".")) {
        resultado = resultado.substring(0, resultado.length - 1);
    }
    return resultado;
}

myScope();
