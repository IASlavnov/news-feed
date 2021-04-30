import Abstract from './abstract.js';

export const getDate = (publishedAt) => {
  const date = new Date(Date.parse(publishedAt));
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${date.getFullYear()} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const renderElement = (container, element) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }
  
  if (element instanceof Abstract) {
    element = element.getElement();
  }

  container.append(element);
};

export const remove = (element) => {
  if (!(element instanceof Abstract)) {
    throw new Error('Can remove only components');
  }

  element.getElement().remove();
  element.removeElement();
};
