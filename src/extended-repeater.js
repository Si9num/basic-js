
const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let res = [];
    for (let i = 0; i < options.repeatTimes; i++) {
        res.push(str);
    }
    if (options.separator !== undefined) {
        res = res.join(options.separator);
    }
    else {
        res = res.join("+");
    }


    return res;
  
};
