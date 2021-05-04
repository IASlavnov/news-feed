import './scroll-to-top.js';
import { getData } from './news-api.js';
import { renderElement, remove } from './util.js';
import Post from './post.js';
import ShowMore from './show-more.js';
import PostsList from './posts-list.js';
import { setFilterObject, setInitialFilterObject, getFilteredData } from './filter.js';

const NEWS_PER_STEP = 10;
const postsFeed = document.querySelector('.posts__feed');
const filtersList = document.querySelector('.posts__filter');
const postsList = new PostsList();
const form = document.querySelector('.filter-form');
const resetButton = form.querySelector('.filter-form__reset');
const viewList = document.querySelector('.view');
const filtersButton = document.querySelector('.page-header__filters');

filtersButton.addEventListener('click', () => {
  filtersList.classList.toggle('posts__filter--closed');
});

viewList.addEventListener('click', (evt) => {
  if (evt.target.parentElement.classList.contains('view__button--list')) {
    if (!postsList.getElement().classList.contains('posts__list--list')) {
      postsList.getElement().classList.remove('posts__list--grid-small');
      postsList.getElement().classList.remove('posts__list--grid-large');
      postsList.getElement().classList.add('posts__list--list');
    }
  } else if (evt.target.parentElement.classList.contains('view__button--grid-large')) {
      if (!postsList.getElement().classList.contains('posts__list--grid-large')) {
        postsList.getElement().classList.remove('posts__list--list');
        postsList.getElement().classList.remove('posts__list--grid-small');
        postsList.getElement().classList.add('posts__list--grid-large');
        console.log(postsList.getElement());
      }
  } else if (evt.target.parentElement.classList.contains('view__button--grid-small')) {
      if (!postsList.getElement().classList.contains('posts__list--grid-small')) {
        postsList.getElement().classList.remove('posts__list--list');
        postsList.getElement().classList.remove('posts__list--grid-large');
        postsList.getElement().classList.add('posts__list--grid-small');
      }
  }
});

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

    form.addEventListener('change', (evt) => {
      setFilterObject(evt);
      const filteredArticles = articles.slice().filter((article) => getFilteredData(article));
      renderContent(filteredArticles);
    });

    resetButton.addEventListener('click', () => {
      form.reset();
      setInitialFilterObject();
      renderContent(articles);
    });

    form.addEventListener('input', (evt) => {
      evt.preventDefault();
      const copiedArticles = articles.slice().filter((article) => {
        return article.title.toLowerCase().includes(evt.target.value.toLowerCase()) ||
          article.description?.toLowerCase().includes(evt.target.value.toLowerCase());
      });
      renderContent(copiedArticles);
    });
  })
  .catch((err) => console.log(err));
