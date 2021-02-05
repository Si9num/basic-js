const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix) {
   let arr = matrix.flat();
    let sum = 0;
    for (let a of arr) {
        if (a == '^^') {
            sum += 1;
        }
    }
    return sum;
};
