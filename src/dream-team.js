const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    let arr = [];
    let arr1 = [];
    members = members.filter(el => typeof el == "string");
    for (let a of members) {
        if (typeof (a) != String) {
            arr.sort().push(a);
        }

    }
    arr = arr.map(del => del.trim());
    for (let b of arr) {
        if (typeof b !== Number) {
            arr1.push(b.charAt(0).toUpperCase());
        }
    }
     
    return arr1.sort().join("").trim().toUpperCase();
    }
