import {createElement} from './util.js';

const createShowMoreTemplate = () => {
  return '<button class="posts__button button" type="button">Show More</button>';
}

export default class showMore {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createShowMoreTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
