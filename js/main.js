import './layout.js';
import './scroll-to-top.js';
import { getData } from './news-api.js';
import { renderElement } from './util.js';
import Post from './post.js';
import ShowMore from './show-more.js';

const NEWS_PER_STEP = 10;
const postsFeed = document.querySelector('.posts__feed');
const postsList = postsFeed.querySelector('.posts__list');

const renderPost = (article) => {
  const post = new Post(article);
  renderElement(postsList, post.getElement());
  post.getElement().querySelector('.post__watched').addEventListener('click', () => {
    post.getElement().classList.toggle('post--read');
  });
  post.getElement().querySelector('.post__delete').addEventListener('click', () => {
    post.getElement().remove();
  });
  post.getElement().querySelector('.post__img-link').addEventListener('click', () => {
    if (!post.getElement().classList.contains('post--read')) {
      post.getElement().classList.add('post--read');
    }
  });
  post.getElement().querySelector('.post__link').addEventListener('click', () => {
    if (!post.getElement().classList.contains('post--read')) {
      post.getElement().classList.add('post--read');
    }
  });
}

const renderContent = (articles) => {
  let renderedNewsCount = 0;
  articles
    .slice(renderedNewsCount, NEWS_PER_STEP)
    .forEach((article) => renderPost(article));
  renderedNewsCount += NEWS_PER_STEP;

  if (articles.length > NEWS_PER_STEP) {
    renderElement(postsFeed, new ShowMore().getElement());
    const showMoreButton = postsFeed.querySelector('.posts__button');

    showMoreButton.addEventListener('click', () => {
      articles
        .slice(renderedNewsCount, renderedNewsCount + NEWS_PER_STEP)
        .forEach((article) => renderPost(article));
      renderedNewsCount += NEWS_PER_STEP;

      if (renderedNewsCount >= articles.length) {
        showMoreButton.remove();
      }
    });
  }
};

getData()
  .then((data) => {
    const { articles } = data;
    renderContent(articles);
  })
  .catch((err) => console.log(err));
