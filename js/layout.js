const filtersButton = document.querySelector('.page-header__filters');
const viewList = document.querySelector('.view');
const postsList = document.querySelector('.posts__list');
const filtersList = document.querySelector('.posts__filter');

filtersButton.addEventListener('click', () => {
  filtersList.classList.toggle('posts__filter--closed');
});

viewList.addEventListener('click', (evt) => {
  console.log(evt.target.parentElement);
  if (evt.target.parentElement.classList.contains('view__button--list')) {
    if (!postsList.classList.contains('posts__list--list')) {
      postsList.classList.remove('posts__list--grid-small');
      postsList.classList.remove('posts__list--grid-large');
      postsList.classList.add('posts__list--list');
    }
  } else if (evt.target.parentElement.classList.contains('view__button--grid-large')) {
      if (!postsList.classList.contains('posts__list--grid-large')) {
        postsList.classList.remove('posts__list--list');
        postsList.classList.remove('posts__list--grid-small');
        postsList.classList.add('posts__list--grid-large');
      }
  } else if (evt.target.parentElement.classList.contains('view__button--grid-small')) {
      if (!postsList.classList.contains('posts__list--grid-small')) {
        postsList.classList.remove('posts__list--list');
        postsList.classList.remove('posts__list--grid-large');
        postsList.classList.add('posts__list--grid-small');
      }
  }
});
