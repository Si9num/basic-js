const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain:[],
  getLength() {
      return this.chain.length;
  },
  addLink(value) {
      arguments.length == 0 ? this.chain.push("( )") : this.chain.push(`( ${value} )`);
      
      return this;
  },
  removeLink(position) {
      if ( typeof position !== 'number' || !Number.isInteger(position) || (position <= 0) || (position > this.chain.length) ) {
          this.chain = [];
          throw new Error("incorrect");
      }
     
     
      this.chain.splice(position - 1, 1);
  
      
      return this;
  },
  reverseChain() {
      this.chain.reverse();
      return this;
  },
  finishChain() {
      let finish = this.chain.join("~~");
      this.chain= [];
     return finish;
  }
};

module.exports = chainMaker;
