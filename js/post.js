import {getDate} from './util.js';
import Abstract from './abstract.js';

const createPostTemplate = (article) => {
  const {title, description, publishedAt, url, urlToImage} = article;

  return `<li class="posts__item post">
    <h1 class="post__title">${title}</h1>
    <a class="post__img-link" href="${url}" target="_blank">
      <img class="post__img" src="${urlToImage ? urlToImage : 'img/news.jpg'}" width="400" height="200" alt="Image for post">
    </a>
    <div class="post__controls">
      <button class="post__watched button-control" type="button"><i class="fa fa-check fa-2x" aria-label="Отметить прочитанным"></i></button>
      <button class="post__delete button-control" type="button"><i class="fa fa-times fa-2x" aria-label="Удалить пост"></i></button>
    </div>
    <p class="post__description">${description? description : ''}</p>
    <div class="post__container">
      <span class="post__date"><i class="fa fa-calendar" aria-hidden="true"></i>${getDate(publishedAt)}</span>
      <a class="post__link button" href="${url}" target="_blank">Read more</a>
    </div>
  </li>`;
};

export default class Post extends Abstract {
  constructor(article) {
    super();
    this._article = article;
    this._clickWatchedHandler = this._clickWatchedHandler.bind(this);
    this._clickDeleteHandler = this._clickDeleteHandler.bind(this);
    this._clickImgLinkHandler = this._clickImgLinkHandler.bind(this);
    this._clickReadMoreHandler = this._clickReadMoreHandler.bind(this);
  }

  getTemplate() {
    return createPostTemplate(this._article);
  }

  _clickWatchedHandler(evt) {
    evt.preventDefault();
    this._callback.clickWatched();
  }

  _clickDeleteHandler(evt) {
    evt.preventDefault();
    this._callback.clickDelete();
  }

  _clickImgLinkHandler() {
    this._callback.clickImgLink();
  }

  _clickReadMoreHandler() {
    this._callback.clickReadMore();
  }

  setClickWatchedHandler(callback) {
    this._callback.clickWatched = callback;
    this.getElement().querySelector('.post__watched').addEventListener('click', this._clickWatchedHandler);
  }

  setClickDeleteHandler(callback) {
    this._callback.clickDelete = callback;
    this.getElement().querySelector('.post__delete').addEventListener('click', this._clickDeleteHandler);
  }

  setClickImgLinkHandler(callback) {
    this._callback.clickImgLink = callback;
    this.getElement().querySelector('.post__img-link').addEventListener('click', this._clickImgLinkHandler);
  }

  setClickReadMoreHandler(callback) {
    this._callback.clickReadMore = callback;
    this.getElement().querySelector('.post__link').addEventListener('click', this._clickReadMoreHandler);
  }
}
