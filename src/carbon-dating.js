const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity) {
    if (typeof (sampleActivity) !== String) {
        return false;
    }
    if (arguments.length == 0) {
        return false;
    }
    let k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil((MODERN_ACTIVITY/+sampleActivity)/k)
};
