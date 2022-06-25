//input value
const a = 0.0;
const b = 2.0;
const N = 100;

//my function
function f(x) {
    return Math.sin(x);
}

let result = [];

//Метод лівих прямокутників
let h = (b - a)/N;
let leftResult = 0;

for(let i = 0; i <= N - 1; i++) {
    if(i == N-1) {
        maxX = a + i*h;
    }
    leftResult += h * f(a + i*h);
}

M = f(maxX);
R = (h*h*M*(b-a))/24;
leftResult += R;

result[0] = leftResult;

//Метод середніх прямокутників
h = (b - a)/N;
let middleResult = 0;

for(let i = 0; i <= N - 1; i++) {
    if(i == N-1) {
        maxX = a + i*h;
    }
    middleResult += h * f(a + i*h + h/2);
}

M = f(maxX);
R = (h*h*M*(b-a))/24;
middleResult += R;

result[1] = middleResult;

//Метод правих прямокутників
h = (b - a)/N;
let rightResult = 0;

for(let i = 1; i <= N; i++) {
    if(i == N) {
        maxX = a + i*h;
    }
    rightResult += h * f(a + i*h);
}

M = f(maxX);
R = (h*h*M*(b-a))/24;
rightResult += R;

result[2] = rightResult;

//Метод трапецій
function secondDer(x) {
    return -Math.sin(x);
}

h = (b-a) / N;
let trapezResult = 0;
trapezResult += h * ((f(a) + f(b)) / 2);

for(let i = 1; i <= N-1; i++) {
    if(i == N - 1) {
        maxX = a + i*h;
    }
    trapezResult += h * f(a + i*h);
}

M = secondDer(maxX);
R = ((-1)*h*h*M*(b-a))/12;
trapezResult += R;

result[3] = trapezResult;

//Метод парабол
h = (b - a)/(2*N);
const fourthDer = (x) => {
    return Math.sin(x);
}

let parabolaResult = 0;
parabolaResult += (h/3) * f(a);
parabolaResult += (h/3) * f(b);

for(let i = 1; i <= N; i++) {
    if(i == N) {
        maxX = a + i*h;
    }
    parabolaResult += (h/3) * 4 * f(a + 2*h*i - h);
}

for(let i = 1; i <= N - 1; i++) {
    parabolaResult += (h/3) * 2 * f(a + 2*h*i);
}

M = fourthDer(maxX);
R = (Math.pow(h, 4) * M * (b-a))/180;
parabolaResult += (h/3) * R;

result[4] = parabolaResult;

console.log(result);
