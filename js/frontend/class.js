export class Users {
  constructor(obj) {
    Object.assign(this, obj);
  }

  DrowCardList(text) {
    return `<li class="user-card__list-item">${text}</li>`;
  }

  DrowCard() {
    return `
      <div class="user-card">
          <span class="user-card__heading">${this.userName}</span>
          <span class="user-card__text">${this.userAge} лет/года</span>
          <div class="user-card__inner">
            <div class="span user-card__text">Хобби:</div>
            <ol class="user-card__list"></ol>
          </div>
        </div>
      </div>
    `;
  }
}