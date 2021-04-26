import './layout.js';
import './post-control.js';
import {getData} from './news-api.js';
import {renderElement} from './util.js';
import Post from './post.js';
import ShowMore from './show-more.js';

const NEWS_PER_STEP = 10;
const postsFeed = document.querySelector('.posts__feed');
const postsList = postsFeed.querySelector('.posts__list');

const renderNews = (news) => {
  let renderedNewsCount = 0;
  news
    .slice(renderedNewsCount, NEWS_PER_STEP)
    .forEach((elem) => {
      renderElement(postsList, new Post(elem).getElement());
    });
  
    renderedNewsCount += NEWS_PER_STEP;

  if (news.length > NEWS_PER_STEP) {
    renderElement(postsFeed, new ShowMore().getElement());

    const showMoreButton = postsFeed.querySelector('.posts__button');
    showMoreButton.addEventListener('click', () => {
      news
        .slice(renderedNewsCount, renderedNewsCount + NEWS_PER_STEP)
        .forEach((elem) => {
          renderElement(postsList, new Post(elem).getElement());
        });

      renderedNewsCount += NEWS_PER_STEP;
      if (renderedNewsCount >= news.length) {
        showMoreButton.remove();
      }
    });
  }
};

getData()
  .then((data) => {
    const {articles} = data;
    renderNews(articles);
  })
  .catch((err) => console.log(err));
