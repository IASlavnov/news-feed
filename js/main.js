import './layout.js';
import './scroll-to-top.js';
import { getData } from './news-api.js';
import { renderElement, remove } from './util.js';
import Post from './post.js';
import ShowMore from './show-more.js';
import { setFilterObject } from './filter.js';

const NEWS_PER_STEP = 10;
const postsFeed = document.querySelector('.posts__feed');
const postsList = postsFeed.querySelector('.posts__list');
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
    console.log(articles);
    renderContent(articles);

    filterForm.addEventListener('change', (evt) => {
      const obj = setFilterObject(evt);
      console.log('asdasfda', obj[evt.target.value]); 
    });

    // filterForm.addEventListener('change', (evt) => {
    //   const choosenDate = getDateForFilter(evt);
    //   console.log(choosenDate);
    //   console.log(articles[0].publishedAt);
    //   const filteredArticles = articles
    //     .slice()
    //     .filter((article) => {
    //       const date = new Date(Date.parse(article.publishedAt));
    //       console.log(date);
    //     });
    //   console.log(filteredArticles);
    // });
  })
  .catch((err) => console.log(err));
