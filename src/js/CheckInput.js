export default class CheckInput {
  constructor(length, number, valueLength, validate) {
    this.length = length;
    this.number = number;
    this.valueLength = valueLength;
    this.validate = validate;
  }

  checkLength(value) {
    if (value.length < 16 || value.length > 19) {
      this.length.classList.remove('popup_hidden');
    }
  }

  checkNumber(value) {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(value)) {
      this.number.classList.remove('popup_hidden');
    }
  }
}