import './layout.js';
import './scroll-to-top.js';
import { getData } from './news-api.js';
import { renderElement, remove } from './util.js';
import Post from './post.js';
import ShowMore from './show-more.js';
import PostsList from './posts-list.js';
import { setFilterObject, getFilteredData } from './filter.js';

const NEWS_PER_STEP = 10;
const postsFeed = document.querySelector('.posts__feed');
const postsList = new PostsList();
// asddddddddddddddddd
const filterForm = document.querySelector('.filter-form');

const renderPost = (article) => {
  const post = new Post(article);
  renderElement(postsList, post);

  post.setClickWatchedHandler(() => {
    post.getElement().classList.toggle('post--read');
  });
  post.setClickDeleteHandler(() => {
    remove(post);
  });
  post.setClickImgLinkHandler(() => {
    if (!post.getElement().classList.contains('post--read')) {
      post.getElement().classList.add('post--read');
    }
  });
  post.setClickReadMoreHandler(() => {
    if (!post.getElement().classList.contains('post--read')) {
      post.getElement().classList.add('post--read');
    }
  });
}

const renderContent = (articles) => {
  postsList.getElement().innerHTML = '';
  postsFeed.innerHTML = '';
  renderElement(postsFeed, postsList);

  let renderedNewsCount = 0;
  articles
    .slice(renderedNewsCount, NEWS_PER_STEP)
    .forEach((article) => renderPost(article));
  renderedNewsCount += NEWS_PER_STEP;

  if (articles.length > NEWS_PER_STEP) {
    const showMoreButton = new ShowMore();
    renderElement(postsFeed, showMoreButton);

    
    showMoreButton.setClickHandler(() => {
      articles
        .slice(renderedNewsCount, renderedNewsCount + NEWS_PER_STEP)
        .forEach((article) => renderPost(article));
      renderedNewsCount += NEWS_PER_STEP;

      if (renderedNewsCount >= articles.length) {
        remove(showMoreButton);
      }
    });
  }
};

getData()
  .then((data) => {
    const { articles } = data;
    renderContent(articles);

    filterForm.addEventListener('change', (evt) => {
      setFilterObject(evt);
      const filteredArticles = articles.slice().filter((article) => getFilteredData(article));
      renderContent(filteredArticles);
    });
  })
  .catch((err) => console.log(err));
