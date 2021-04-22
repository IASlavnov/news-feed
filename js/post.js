import {createElement} from './util.js';

const getDate = (publishedAt) => {
  const date = new Date(Date.parse(publishedAt));
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const hours = date.getHours();
  const seconds = date.getSeconds();
  return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${date.getFullYear()} ${hours < 10 ? '0' + hours : hours}:${seconds < 10 ? '0' + seconds : seconds}`;
};

const createPostTemplate = (article) => {
  const {title, description, publishedAt, url, urlToImage} = article;

  return `<li class="posts__item post">
    <h1 class="post__title">${title}</h1>
    <a class="post__img-link" href="${url}" target="_blank">
      <img class="post__img" src="${urlToImage}" width="400" height="200" alt="Image for post">
    </a>
    <div class="post__controls">
      <button class="post__watched button-control" type="button"><i class="fa fa-check fa-2x" aria-label="Отметить прочитанным"></i></button>
      <button class="post__delete button-control" type="button"><i class="fa fa-times fa-2x" aria-label="Удалить пост"></i></button>
    </div>
    <p class="post__description">${description}</p>
    <div class="post__container">
      <span class="post__date"><i class="fa fa-calendar" aria-hidden="true"></i>${getDate(publishedAt)}</span>
      <a class="post__link button" href="${url}" target="_blank">Read more</a>
    </div>
  </li>`;
};

export default class Post {
  constructor(article) {
    this._article = article;
    this._element = null;
  }

  getTemplate() {
    return createPostTemplate(this._article);
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
