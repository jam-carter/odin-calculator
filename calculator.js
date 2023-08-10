const current = document.getElementById('current');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');
const zero = document.getElementById('zero');

//empty ohject that holds the values entered by the user
let object = {

}

//this loops through buttons 1-9 and adds an event listener to allow the user to click on the buttons
//used to save repetitive code
let numButtons = document.querySelectorAll(".btn");
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", (e) => {
        addNumber(e.target.textContent);
    });
}


//applies the eventlistener to the operattor buttons
let operatorButtons = document.querySelectorAll(".btn-operation");
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", (e) => {
        addOperator(e.target.textContent);
    })
}

zero.addEventListener('click', addZero);

function addZero() {
    if (('product' in object) && !('operator' in object)) {
        return false;
    } else if (!('operator' in object) && !('numOne' in object)) {
        object["numOne"] = [0];
        current.textContent = object.numOne;
    } else if (!('operator' in object)) {
        if (!(object.numOne[0] == 0) && (object.numOne.length < 10)) {
            object["numOne"] += [0];
            current.textContent = object.numOne;
        }
    }
    if (!('numTwo' in object) && ('operator' in object)) {
        object["numTwo"] = [0];
        current.textContent = object.numTwo;
    } else if ('numTwo' in object) {
        if (!(object.numTwo[0] == 0) && (object.numTwo.length < 10)) {
            object["numTwo"] += [0];
            current.textContent = object.numTwo;
        }
    }
}

function addNumber(e) {
    if (('product' in object) && !('operator' in object)) {
        return false;
    } else if (!('operator' in object) && !('numOne' in object)) {
        object["numOne"] = [e];
        current.textContent = object.numOne;
    } else if (!('operator' in object) && (object.numOne.length < 10)) {
        object["numOne"] += [e];
        current.textContent = object.numOne;
    }
    if (!('numTwo' in object) && ('operator' in object)) {
        object["numTwo"] = [e];
        current.textContent = object.numTwo;
    } else if (('numTwo' in object) && (object.numTwo.length < 10)) {
        object["numTwo"] += [e];
        current.textContent = object.numTwo;
    }
}

function addOperator(e) {
    if (('product' in object) && ('operator' in object) && ('numTwo' in object)) {
        operate(object.product, object.operator, object.numTwo);
        current.textContent = object.product;
        object['operator'] = e;
    } else if (('numOne' in object) && ('operator' in object) && ('numTwo' in object)) {
        operate(object.numOne, object.operator, object.numTwo);
        current.textContent = object.product;
        object['operator'] = e;
    } else if (!('numOne' in object) && !('product' in object)) {
        return false;
    } else {
        if ('numOne' in object) {
            object['operator'] = e;
            current.textContent = object.numOne;
        } else {
            current.textContent = object.product;
            object['operator'] = e;
        }
    }
}

function clearAll() {
    delete object.numOne;
    delete object.operator;
    delete object.numTwo;
    delete object.product;
    current.textContent = "0";
}
clear.addEventListener('click', clearAll);

function selectEquals() {
    if (!('numTwo' in object)) {
        return false;
    } else if (!('product' in object)) {
        object.product = operate(object.numOne, object.operator, object.numTwo);
    } else {
        object.product = operate(object.product, object.operator, object.numTwo);
    }
    current.textContent = object.product;
    current.textContent = current.textContent.replace('=', '');
}

equals.addEventListener('click', selectEquals);

//Arithmetic functions
function operate(a, operator, b) {
    if (operator == "+") {
        return addition(a, b);
    } else if (operator == "-") {
        return subtraction(a, b);
    } else if (operator == "*") {
        return multiplication(a, b);
    } else if (operator == "/") {
        return division(a, b);
    }
}

function addition(a, b) {
    let result = Number(a) + Number(b);
    current.textContent = parseFloat(result.toFixed(2));
    object['product'] = parseFloat(result.toFixed(2));
    delete object.numOne;
    delete object.numTwo;
    delete object.operator;
    return result;
}

function subtraction(a, b) {
    let result = Number(a) - Number(b);
    current.textContent = parseFloat(result.toFixed(2));
    object['product'] = parseFloat(result.toFixed(2));
    delete object.numOne;
    delete object.numTwo;
    delete object.operator;
    return result;
}

function multiplication(a, b) {
    let result = Number(a) * Number(b);
    current.textContent = parseFloat(result.toFixed(2));
    object['product'] = parseFloat(result.toFixed(2));
    delete object.numOne;
    delete object.numTwo;
    delete object.operator;
    return result;
}

function division(a, b) {
    let result = Number(a) / Number(b);
    current.textContent = parseFloat(result.toFixed(2));
    object['product'] = parseFloat(result.toFixed(2));
    delete object.numOne;
    delete object.numTwo;
    delete object.operator;
    return result;
}


