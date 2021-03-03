const CustomError = require("../extensions/custom-error");

const chainMaker = {

    res: [],

    getLength() {
        return this.res.length;
    },
    addLink(value) {
        typeof value !== "null" ? this.res.push(`( ${value} )`) : this.res.push("( )");
        return this;
    },
    removeLink(position) {
        if (typeof position !== "number" || position <= 0 || position > this.res.length) {
            this.res = [];
            throw new Error("Wrong type")
        }
        else {
            if (position > 0) {
                this.res.splice(position - 1, 1);
                return this;

            }
            else {
                this.res.splice(position - res.length, 1);
                return this;
            }
        }
    },
    reverseChain() {
        this.res.reverse();
        return this;
    },
    finishChain() {
        let end = this.res.join("~~");
        this.res=[];
        return end
    }
};

module.exports = chainMaker;
