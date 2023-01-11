import CheckInput from './CheckInput';
import PaySistem from './PaySistem';
import Validator from './Validator';

const cards = Array.from(document.querySelectorAll('.card-icon'));
const input = document.querySelector('.card-input');
const submit = document.querySelector('.card-submit');
const valid = document.querySelector('.valid');
const invalid = document.querySelector('.invalid');
const length = document.querySelector('.length');
const number = document.querySelector('.number');
const popup = Array.from(document.querySelectorAll('.popup'));

const validator = new Validator(valid, invalid, popup);
const checkInput = new CheckInput(length, number);
const paySistem = new PaySistem(cards);
let inputText;

submit.addEventListener('click', (e) => {
  e.preventDefault();
  inputText = input.value;
  checkInput.checkLength(inputText);
  checkInput.checkNumber(inputText);
  if (length.classList.contains('popup_hidden') && number.classList.contains('popup_hidden')) {
    validator.valueLength(inputText);
    validator.validate();
    paySistem.checkCard(inputText);
  }
  validator.popupHidden();
  paySistem.cardHidden();
  input.value = '';
});