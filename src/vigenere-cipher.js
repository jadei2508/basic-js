const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  constructor(data = true) {
    this.data = data;
    this.words = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  }

  encrypt(msg, key) {
    const message = [...msg.toUpperCase()];
    const keys = [...key.toUpperCase()];
    let position = 0;
    let result = message.map(element => {
      if (this.words.includes(element)) {
        let index = (this.words.indexOf(keys[position]) + this.words.indexOf(element)) % this.words.length;
        position = ++position % keys.length;
        return this.words[index];
      }
      return element;
    } );
    return this.data ? result.join('') : result.reverse().join('');
  }

  decrypt(msg, key) {
    const message = [...msg.toUpperCase()];
    const keys = [...key.toUpperCase()];
    let position = 0;
    let result = message.map(element => {
      if (this.words.includes(element)) {
        let index = this.words.indexOf(element) - this.words.indexOf(keys[position]);
        if (index < 0) index += this.words.length;
        position = ++position % keys.length;
        return this.words[index];
      }
      return element;
    } );
    return this.data ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
