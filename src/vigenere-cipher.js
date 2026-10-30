const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.quadro = this.createQuadro()
  }

  createQuadro() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const quadro = new Array(alphabet.length);
    for (let i = 0; i < alphabet.length; i += 1) {
      const arr = Array.from({ length: alphabet.length }, (_, ind) => alphabet[(ind + i) % alphabet.length])
      quadro[i] = arr;
    }
    return quadro;
  }

  encrypt(message, key) {
    if (!message || !key) return `Incorrect arguments!`;
    const onlyEnStrRegex = /^[A-Za-z]+$/;
    let encryptArray = []
    const messageLength = message.length;
    const keyLength = key.length;
    const alphabetArray = this.quadro[0];
    let j = 0
    for (let i = 0; i < message.length; i += 1) {
      if (!onlyEnStrRegex.test(message[i])) {
        encryptArray.push(message[i]);
        if (message[i] === ' ') j -= 1;
      } else {
        const rowIndex = alphabetArray.indexOf(key[j % keyLength].toUpperCase());
        const columnIndex = alphabetArray.indexOf(message[i].toUpperCase());
        encryptArray.push(this.quadro[rowIndex][columnIndex]);
      }
      j += 1;
    }
    if (!this.direct) {
      encryptArray.reverse()
    }
    return encryptArray.join('')
  }

  decrypt(message, key) {
    if (!message || !key) return `Incorrect arguments!`;
    const onlyEnStrRegex = /^[A-Za-z]+$/;
    let decryptArray = []
    const keyLength = key.length;
    const alphabetArray = this.quadro[0];
    let j = 0
    for (let i = 0; i < message.length; i += 1) {
      if (!onlyEnStrRegex.test(message[i])) {
        decryptArray.push(message[i]);
        if (message[i] === ' ') j -= 1;
      } else {
        const rowIndex = alphabetArray.indexOf(key[j % keyLength].toUpperCase());
        const columnIndex = this.quadro[rowIndex].indexOf(message[i].toUpperCase());
        decryptArray.push(alphabetArray[columnIndex]);
      }
      j += 1;
    }
    if (!this.direct) {
      decryptArray.reverse();
    }

    return decryptArray.join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
