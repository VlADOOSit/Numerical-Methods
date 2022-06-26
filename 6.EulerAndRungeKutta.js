const a = 0.0;
const b = 2.0;
const M = 40;

let y = Math.LN2;

function der(x, y) {
    return x + y;
}

let x = a;
const h = (b-a) / M;

//Метод Ейлера
function Euler(x, y, der, h, M) {
    let xArr = [];
    for(let i = 0; i < M; i++) {
        xArr[i] = x + (i+1)*h;
    }

    let result = [];

    result[0] = y + h * der(x, y);
    for(let i = 1 ; i < M; i++) {
        result[i] = result[i-1] + h * der(xArr[i-1], result[i-1]);
    }
    return result;
}

console.log('Euler');
console.log(Euler(x, y, der, h, M));

//Метод Рунге-Кутта
const firstR = (h, x, y) => {
    return h * der(x, y);
}

const secondR = (h, x, y) => {
    return h * der(x + h/2, y + firstR(h, x, y)/2);
}

const thirdR = (h, x, y) => {
    return h * der(x + h/2, y + secondR(h, x, y)/2);
}

const fourthR = (h, x, y) => {
    return h * der(x + h, y + thirdR(h, x, y));
}

function RungeKutt(x, y, h, M) {
    let xArr = [];
    for(let i = 0; i < M; i++) {
        xArr[i] = x + (i+1)*h;
    }

    let result = [];
    result[0] = y + (firstR(h, x, y) + 2 * secondR(h, x, y) + 2 * thirdR(h, x, y) + fourthR(h, x, y)) / 6;

    for(let i = 1 ; i < M; i++) {
        result[i] = result[i-1] + (firstR(h, xArr[i-1], result[i-1]) + 2 * secondR(h, xArr[i-1], result[i-1]) + 2 * thirdR(h, xArr[i-1], result[i-1])+ fourthR(h, xArr[i-1], result[i-1])    ) / 6;
    }

    return result;
}

console.log('Runge Kutt ');
console.log(RungeKutt(x, y, h, M));