const CustomError = require("../extensions/custom-error");

const chainMaker = {
    simpleChain: [],
    getLength() {
        return this.simpleChain.length;
    },
    addLink(value) {
        this.simpleChain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (position - 1 < 0) {
            this.simpleChain = [];
            throw new Error();
        }
        this.simpleChain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.simpleChain.reverse();
        return this;
    },
    finishChain() {
        let result = this.simpleChain.join('~~');
        this.simpleChain = [];
        return result;
    }
};

module.exports = chainMaker;
