const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
    let turn = Math.pow(2, disksNumber) - 1;
    let time = Math.floor((turn/turnsSpeed*3600));
    return {
        turns: turn,
    seconds:time,
    }
};
