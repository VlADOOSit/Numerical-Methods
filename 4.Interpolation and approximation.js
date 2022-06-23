//input value
const x0 = 0.0;
const h = Math.PI/20;
const M = 41;

//my function
function f(x) {
    return Math.sin(x);
}

function interpol(x0, h, M, f) {
    let xArr = [];
    let yArr = [];
    const A = 1/(6*h);

    for (let i = 0; i < M; i++) {
        xArr[i] = x0 + i*h; 
    }

    for (let i = 0; i < xArr.length; i++) {
        yArr[i] = f(xArr[i]);
    }

    let result = []; 
    let curr = [17, 18, 19, 20];

    let currX = [];
    let currY = [];

    for(let i = 0; i < curr.length; i++) {
        currX[i] = xArr[curr[i]];
    }

    for(let i = 0; i < curr.length; i++) {
        currY[i] = yArr[curr[i]];
    }

    result[0] = A * (-11*currY[0] + 18*currY[1] - 9*currY[2] + 2*currY[3]);
    result[1] = A * (-2*currY[0] - 3*currY[1] + 6*currY[2] - 1*currY[3]);
    result[2] = A * (1*currY[0] - 6*currY[1] + 3*currY[2] + 2*currY[3]);
    result[3] = A * (-2*currY[0] + 9*currY[1] - 18*currY[2] + 11*currY[3]);



    for (let i = 0; i < result.length; i++) {
        console.log(`x${i} = ${currX[i]}\t y${i} = ${currY[i]}\t y'${i} = ${result[i]}`);
    }
    

    return result;

}

console.log('Interpolation');
interpol(x0, h, M, f);

function approx(x0, h, M, f) {
    let xArr = [];
    let yArr = [];
    const A = 1/(70*h*h);;

    for (let i = 0; i < M; i++) {
        xArr[i] = x0 + i*h; 
    }

    for (let i = 0; i < xArr.length; i++) {
        yArr[i] = f(xArr[i]);
    }

    let result = []; 
    const currIndex = 36;

    let currX = [];
    let currY = [];

    for(let i = 0; i < 5; i++) {
        currX[i] = xArr[currIndex-2+i];
    }

    for(let i = 0; i < 5; i++) {
        currY[i] = yArr[currIndex-2+i];
    }

    for(let i = 0; i < currX.length; i++) {
        result[i] = A * ((-14 * h + 20 * currX[i]) * currY[0] 
                            + (-7 * h - 10 * currX[i]) * currY[1]
                            - 20 * currX[i] * currY[2]
                            + (7 * h - 10 * currX[i]) * currY[3]
                            + (14 * h + 20 * currX[i]) * currY[4]);
    }

    for (let i = 0; i < result.length; i++) {
        console.log(`x${i} = ${currX[i]}\t y${i} = ${currY[i]}\t y'${i} = ${result[i]}`);
    }

    return result;
}
console.log('\nApprox');
approx(x0, h, M, f);
