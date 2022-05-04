let a = 0.0;
let b = 1.0;

function f(x) {
    return Math.exp(x) - 10*x;
}

function firstDerivative(x) {
    return Math.exp(x) - 10;
}

function secondDerivative(x) {
    return Math.exp(x);
}

//Метод половинного ділення 
function halfDivision(a, b, f) {
    let tempA = a;
    let tempB = b;
    let eps = 0.0001;

    c = (a + b) / 2;

    let result = {
        zeroFunc: [],
        valueFunc: []
    };

    result.zeroFunc[0] = c;
    result.valueFunc[0] = f(result.zeroFunc[0]);

    for(let i = 0; (b-a)/Math.pow(2, i) > eps; i++) {
        if (f(a)*f(c) < 0) {
            tempB = c;
        }
        else {
            tempA = c;
        }

        c = (tempA + tempB) / 2;
        result.zeroFunc[i+1] = c;
        result.valueFunc[i+1] = f(result.zeroFunc[i+1]);
    }

    return result;
}

console.log('Half Division');
console.log(halfDivision(a, b, f));

//Метод Хорд
function chord(a, b, f, secondDerivative) {
    let eps = 0.0001;
    if(f(a) * secondDerivative(a) > 0) {
        fix = a;
        move = b;
    }
    else {
        fix = b;
        move = a;
    }

    let result = {
        zeroFunc: [],
        valueFunc: []
    };

    result.zeroFunc[0] = move;
    result.valueFunc[0] = f(result.zeroFunc[0]);

    for(let i = 0; (i != 0) ? (Math.abs(result.zeroFunc[i] - result.zeroFunc[i-1]) > eps) : (1); i++) {
        move =  move - ((f(move) * (move - fix)) / (f(move) - f(fix)));
        result.zeroFunc[i+1] = move;
        result.valueFunc[i+1] = f(result.zeroFunc[i+1]);
    }
    return result;
}

console.log('Chord');
console.log(chord(a, b, f, secondDerivative));

//Метод Н'ютона
function newton(a, b, f, firstDerivative, secondDerivative) {
    let eps = 0.0000001;

    let result = {
        zeroFunc: [],
        valueFunc: []
    };

    if(f(a) * secondDerivative(a) > 0) {
        x = a;
    }
    else {
       x = b;
    }

    result.zeroFunc[0] = x;
    result.valueFunc[0] = f(result.zeroFunc[0]);

    for (let i = 0; Math.abs(f(x)) > eps; i++) {
        x = x - (f(x) / firstDerivative(x));
        result.zeroFunc[i+1] = x;
        result.valueFunc[i+1] = f(result.zeroFunc[i+1]);
    }

    return result;
}

console.log('Newton');
console.log(newton(a, b, f, firstDerivative, secondDerivative));
