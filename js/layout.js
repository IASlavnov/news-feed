const viewList = document.querySelector('.view');
const postsList = document.querySelector('.posts__list');

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

// 3 обработчика отдельно. Черновой вариант, если код выше норм, то удалю

// const buttonLayoutList = document.querySelector('.view__button--list');
// const buttonLayoutGridLarge = document.querySelector('.view__button--grid-large');
// const buttonLayoutGridSmall = document.querySelector('.view__button--grid-small');

// buttonLayoutList.addEventListener('click', () => {
//   if (postsList.classList.contains('posts__list--grid-small') || postsList.classList.contains('posts__list--grid-large')) {
//     postsList.classList.remove('posts__list--grid-small');
//     postsList.classList.remove('posts__list--grid-large');
//     postsList.classList.add('posts__list--list');
//   }
// });

// buttonLayoutGridLarge.addEventListener('click', () => {
//   if (postsList.classList.contains('posts__list--list') || postsList.classList.contains('posts__list--grid-small')) {
//     postsList.classList.remove('posts__list--list');
//     postsList.classList.remove('posts__list--grid-small');
//     postsList.classList.add('posts__list--grid-large');
//   }
// });

// buttonLayoutGridSmall.addEventListener('click', () => {
//   if (postsList.classList.contains('posts__list--list') || postsList.classList.contains('posts__list--grid-large')) {
//     postsList.classList.remove('posts__list--list');
//     postsList.classList.remove('posts__list--grid-large');
//     postsList.classList.add('posts__list--grid-small');
//   }
// });
