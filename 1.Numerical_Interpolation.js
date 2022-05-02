let xValue = [0.35, 0.41, 0.47, 0.51, 0.56, 0.64];
let functValue = [2.73951, 2.30080, 1.96864, 1.78776, 1.59502, 1.34310];
let argument = [0.526, 0.482, 0.436, 0.453, 0.552, 0.640];

function lagrange(xValue, functValue, argument) {
    let result = [];
    for (let i = 0; i < xValue.length; i++) {
        let elemResult = 0;
        for (let j = 0; j < xValue.length; j++) {
            let temp = 1;
            for (let k = 0; k < xValue.length; k++) {
                if (k != j) {
                    temp *= (argument[i] - xValue[k]) /
                            (xValue[j] - xValue[k]);
                }
                if (k == xValue.length - 1) {
                    elemResult += temp * functValue[j];
                }
            }
        }
        result[i] = elemResult;   
    }
    return result;
}

console.log(lagrange(xValue, functValue, argument));
