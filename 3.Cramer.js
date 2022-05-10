let argMatrix =[[2, -1, 1, 3],
                [1, 1, -1, -4],
                [3, -1, 1, -1],
                [1, -3, 0, 3]];

let ansMatrix = [-1, 6, 4, -5];

function createMatrixArr(argMatrix, ansMatrix) {
    let matrixArr = [];

    let temp = [];

    for (let i = 0; i < argMatrix.length; i++) {
        for(let j = 0; j < argMatrix.length; j++) {
            temp[j] = argMatrix[j].slice();
        }
        for(let j = 0; j < argMatrix.length; j++) {
            temp[j][i] = ansMatrix[j];
        }
        matrixArr[i] = [];
        for(let j = 0; j < argMatrix.length; j++) {
            matrixArr[i][j] = temp[j].slice();
        }
    }

    return matrixArr;
}

function getMinor(matrix, n) {
    let minor = [];
    for (let i = 0; i < matrix.length-1; i++){
        minor[i]=[];
    } 
        
    for (let i = 1; i < matrix.length; i++) { 
        for (let j = 0; j < matrix.length; j++) { 
            if (j < n) {
                minor[i-1][j] = matrix[i][j];
            }         
            else if (j > n) {
                minor[i-1][j-1] = matrix[i][j];
            }     
        }
    }
    return minor;
}

function Determinant(matrix) {  
    let det = 0;
        
    if (matrix.length == 1) {
        return matrix[0][0];
    } 

    if (matrix.length == 2) {
        return (matrix[0][0]*matrix[1][1]-matrix[0][1]*matrix[1][0]);
    }

    if (matrix.length == 3) { 
        return ((matrix[0][0]*matrix[1][1]*matrix[2][2]+matrix[0][1]*matrix[1][2]*matrix[2][0]+matrix[0][2]*matrix[1][0]*matrix[2][1])
                 -(matrix[0][0]*matrix[1][2]*matrix[2][1]+matrix[0][1]*matrix[1][0]*matrix[2][2]+matrix[0][2]*matrix[1][1]*matrix[2][0]));
    }

    for (let i = 0; i < matrix.length; i++) { 
        let sign = (i % 2 == 0) ? 1 : -1;
        det += sign * matrix[0][i] * Determinant(getMinor(matrix, i));
    }

    return det; 
}

function cramer(argMatrix, ansMatrix) {
    let result = [];
    let matrixArr = createMatrixArr(argMatrix, ansMatrix);
    for(let i = 0; i < argMatrix.length; i++) {
        result[i] = Determinant(matrixArr[i]) / Determinant(argMatrix);
    }
    return result;
}

function check(result, argMatrix, ansMatrix) {
    let flag;
    
    for(let i = 0; i < argMatrix.length; i++) {
        let temp = 0;
        for(let j = 0; j < argMatrix[i].length; j++) {
            temp += argMatrix[i][j] * result[j];
        }
        if(temp == ansMatrix[i]) {
            flag = true;
        }
        else {
            flag = false;
        }
    }
    return flag;
}

let result = cramer(argMatrix, ansMatrix);
if (check(result, argMatrix, ansMatrix)) {
    console.log(result);
}
else {
    console.log('error');
}
