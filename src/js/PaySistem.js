export default class PaySistem {
  constructor(cards) {
    this.cards = cards;
  }

  checkCard(input) {
    if (input.startsWith(4)) {
      this.cards.forEach((item) => {
        if (item.classList.contains('visa')) {
          item.classList.remove('hidden');
        }
      });
    }

    if (input.startsWith(5)) {
      this.cards.forEach((item) => {
        if (item.classList.contains('mastercard')) {
          item.classList.remove('hidden');
        }
      });
    }

    if (input.startsWith(2)) {
      this.cards.forEach((item) => {
        if (item.classList.contains('mir')) {
          item.classList.remove('hidden');
        }
      });
    }

    if (input.startsWith(37)) {
      this.cards.forEach((item) => {
        if (item.classList.contains('amex')) {
          item.classList.remove('hidden');
        }
      });
    }

    if (input.startsWith(6)) {
      this.cards.forEach((item) => {
        if (item.classList.contains('discover')) {
          item.classList.remove('hidden');
        }
      });
    }

    if (input.startsWith(35)) {
      this.cards.forEach((item) => {
        if (item.classList.contains('jcb')) {
          item.classList.remove('hidden');
        }
      });
    }
  }

  cardHidden() {
    this.cards.forEach((item) => {
      if (!item.classList.contains('hidden')) {
        setTimeout(() => {
          item.classList.add('hidden');
        }, 3000);
      }
    });
  }
}