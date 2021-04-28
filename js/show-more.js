import Abstract from './abstract.js';

const createShowMoreTemplate = () => {
  return '<button class="posts__button button" type="button">Show More</button>';
}

export default class showMore extends Abstract {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createShowMoreTemplate();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.clickShowMore();
  }

  setClickHandler(callback) {
    this._callback.clickShowMore = callback;
    this.getElement().addEventListener('click', this._clickHandler);
  }
}
