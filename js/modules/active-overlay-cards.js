export default class ActiveOverlayCards {
  constructor(cards) {
    this.cards = document.querySelectorAll(cards);
  }

  activeOverlay() {
    this.cards.forEach((card) => {
      setInterval(() => {
        card.classList.toggle("ativo");
      }, 3000);
    });
  }

  init() {
    if (this.cards.length) {
      this.activeOverlay();
    }
    return this;
  }
}
