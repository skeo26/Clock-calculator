function calculating() {
    let op1 = document.getElementById('op1').value;
    let op2 = document.getElementById('op2').value;
    let operator = document.getElementById('operator').value;
    let result = "";

    if (operator === "Конкатенация") {
        result = op1 + op2;
    } else {
        op1 = parseFloat(op1);
        op2 = parseFloat(op2);
    }

    if (isNaN(op1) || isNaN(op2)) {
        result = "Невалидные данные! Повторите попытку ввода!";
    } else {
        switch (operator) {
            case "Сумма":
                result = op1 + op2;
                break;

            case "Разность":
                result = op1 - op2;
                break;

            case "Умножение":
                result = op1 * op2;
                break;

            case "Деление":
                if (op2 === 0)
                    result = "Нельзя делить на ноль!";
                else
                    result = op1 / op2;
                break;
        }
    }
    document.getElementById('result').innerHTML = "Результат: " + result;
}

function updClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById('time').innerText = time;
}

setInterval(updClock, 1000);
updClock();