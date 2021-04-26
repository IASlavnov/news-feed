// const buttonsWatched = document.querySelectorAll('.post__watched');
const buttonsWatched = document.getElementsByClassName('post__watched');
// console.log(buttonsWatched);

const buttonsDelete = document.querySelectorAll('.post__delete');
const postsList = document.querySelector('.posts__list');
// const posts = document.querySelectorAll('.post');
const posts = postsList.children;

console.log(buttonsWatched.length);
for (let i = 0; i < buttonsWatched.length; i++) {
  buttonsWatched[i].addEventListener('click', () => {
    posts[i].classList.toggle('post--read');
  });
}

// buttonsWatched.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     posts[index].classList.toggle('post--read');
//   });
// });

// console.log(buttonsDelete);
// console.log(posts);

buttonsDelete.forEach((button, index) => {
  button.addEventListener('click', () => {
    posts[index].remove();
  });
});
