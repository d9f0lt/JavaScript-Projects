document.getElementById('insert').readOnly = true;
let screen = document.getElementById('insert');
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        if(buttonText == "X") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == "CE") {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == "=") {
            checkForBracketMulti();
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}

document.addEventListener("keydown", function (event) {
    console.log(event.which);
    if (event.shiftKey == 57) {
        event.key = "(";
    } else if (event.shiftKey == 48) {
        event.key = ")";
    } else if (event.shiftKey == 88) {
        screenValue += "*";
        screen.value = screenValue;
    }
    if (
        event.key <= 9 || 
        event.key == "+" ||
        event.key == "=" ||
        event.key == "-" ||
        event.key == "*" ||
        event.key == "." ||
        event.key == "/" ||
        event.key == "%" ||
        event.key == "(" ||
        event.key == ")" 
    ) {
        screenValue += event.key;
        screen.value = screenValue;
    }
    if (event.keyCode == 13 || event.keyCode == 187) {
        checkForBracketMulti();
    } else if (event.keyCode == 46) {
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    } else if (event.keyCode == 8) {
        screenValue = screenValue.slice(0, -1);
        screen.value = screenValue;
    } else if (event.keyCode == 67) {
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    } else if (event.keyCode == 82) {
        this.location.reload();
    }
});

window.onerror = function() {
    alert("Введи нормальное значение");
    screenValue = "";
    screen.value = screenValue;
    console.clear();
};

window.onBracketMultiplication = function() {
    screenValue = addStr(screen.value, screen.value.indexOf("("), "*");
    screen.value = eval(screenValue);
};

function addStr(str, index, stringToAdd) {
    return (
        str.substring(0, index) + stringToAdd + str.substring(index, str.length)
    );
}

function checkForBracketMulti() {
    if (
        screen.value.includes("(") && 
        !isNaN(screen.value.charAt(screen.value.indexOf("(") - 1))
    ) {
        window.onBracketMultiplication();
        return;
    } else {
        screen.value = eval(screenValue);
    }
}