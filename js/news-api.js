const getToday = () => {
  const date = new Date();

  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const API_KEY = '4fb50d0c026d420da3dbf0c38c9580d5'
const URL = `https://newsapi.org/v2/top-headlines?country=us&from=${getToday()}&apiKey=${API_KEY}`;

export const getData = () => {
  return fetch(URL)
    .then(response => response.json())
    .catch(err => console.log(err));
};
