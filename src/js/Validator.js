export default class Validator {
  constructor(valid, invalid, popup) {
    this.valid = valid;
    this.invalid = invalid;
    this.popup = popup;
    this.current = 0;
  }

  valueLength(value) {
    // eslint-disable-next-line no-unused-expressions
    (value.length % 2 === 0) ? this.isEven(value) : this.isOdd(value);
  }

  isEven(value) {
    for (let i = 0; i < value.length; i += 1) {
      if (i % 2 === 0) {
        let sum = (Number(value[i]) * 2);
        if (sum > 9) {
          sum -= 9;
        }
        this.current += sum;
      } else {
        this.current += Number(value[i]);
      }
    }
  }

  isOdd(value) {
    for (let i = 0; i < value.length; i += 1) {
      if (i % 2 !== 0) {
        let sum = (Number(value[i]) * 2);
        if (sum > 9) {
          sum -= 9;
        }
        this.current += sum;
      } else {
        this.current += Number(value[i]);
      }
    }
  }

  validate() {
    if (this.current % 10 === 0) {
      this.valid.classList.remove('popup_hidden');
    } else {
      this.invalid.classList.remove('popup_hidden');
    }
    this.current = 0;
  }

  popupHidden() {
    this.popup.forEach((item) => {
      if (!item.classList.contains('popup_hidden')) {
        setTimeout(() => {
          item.classList.add('popup_hidden');
        }, 3000);
      }
    });
  }
}