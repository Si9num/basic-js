const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (arr.length === 0) {
            return 1;
        }
        let res =0;
        for (let i = 0; i <arr.length; i++) {
            if (Array.isArray(arr[i])) {
              
                res += 1;
            }
        }
        return res+1;
    }
}
