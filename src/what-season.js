const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (arguments.length == 0) {
        return 'Unable to determine the time of year!';
    }
    if (!date.getTime()) {
        throw Error();
    }
 
    let seas = date.getMonth();
    if (seas <2) {
        return "winter";

    }
    else if (seas < 5 ) {
        return "spring";
    }
    else if (seas < 8) {
        return "summer";
    }
    else if (seas < 11) {
        return "autumn"
    }
    else if (seas = 11) {
        return "winter";
    }
  
};
