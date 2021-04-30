import Abstract from './abstract.js';

const createPostsListTemplate = () => {
  return '<ul class="posts__list posts__list--list"></ul>';
}

export default class PostsList extends Abstract {
  getTemplate() {
    return createPostsListTemplate();
  }
}
