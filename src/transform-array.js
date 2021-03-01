const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error("Not array")

    };
    let res = [];
    res = arr;
        for (let i = 0; i < res.length; i++) {
            if (res[i] === "--discard-next" ) {
                if (i < arr.length ) {
                    res.splice(i, 2, null);
                }
            }
            else if (res[i] === "--discard-prev") {
                if (i>0){
                res.splice(i - 1, 1, null)
            }
            }
            else if (res[i] === "--double-next" && res[i + 3] !== "--discard-prev") {
                if (i < arr.length )
                res.splice(i, 1, res[i+1]);
               
            }
            else if (res[i] === "--double-prev" && res[i - 2] !== "--discard-next") {
                if (i > 0)
                res.splice(i, 1, res[i - 1]);
                
            }
         
        }
        res = res.filter(fil => fil !== null && fil !== undefined && fil !== "--discard-next" && fil !== "--discard-prev" && fil !== "--double-next" && fil !== "--double-prev");
        return res
    };
