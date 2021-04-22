import './layout.js';
import './post-control.js';
import {getData} from './news-api.js';
import {renderElement} from './util.js';
import Post from './post.js';

const postsList = document.querySelector('.posts__list');

// const renderPost = (container, article) => {
//   console.log(article);
//   const post = new Post(article);
//   post.getElement().querySelector('.post__watched').addEventListener('click', () => {
//     console.log(post.getElement().querySelector('.post'));
//     post.getElement().querySelector('.post').classList.toggle('post--read');
//   });

//   renderElement(container, post.getElement());
// };

getData()
  .then((data) => {
    console.log(data.articles[1]);
    renderElement(postsList, new Post(data.articles[1]).getElement());
  })
  .catch((err) => console.log(err));
