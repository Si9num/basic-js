


const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let separator = "";
    let addition = "";
    let additionSeparator = "";
    if (typeof options.repeatTimes == "undefined") {
        options.repeatTimes = 1;
    }

    if (typeof options.additionRepeatTimes == "undefined") {
        options.additionRepeatTimes = 1;
    }
    if (options.addition != null) {
        addition = options.addition;
    }
    else {
        addition = ""
    }
    if (options.separator != null) {
        separator = options.separator;
    }
    else {
        separator = "+"
    }
    if (options.additionSeparator != null) {
        additionSeparator = options.additionSeparator;
    }
    else {
        additionSeparator = "|"
    }
    let res = [];
    let res2 = [];
   
    for (let i = 0; i < options.repeatTimes; i++) { 
        res.push(str + addition );

    }
    if (options.addition != null) {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            res2.push(options.addition);

        }
    }
    
   
        return res.join(separator);

}
