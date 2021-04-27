const getToday = () => {
  const date = new Date();

  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const API_KEY = '4fb50d0c026d420da3dbf0c38c9580d5'
const URL = `https://igor-news-proxy.herokuapp.com/from=${getToday()}&apiKey=${API_KEY}`;
// const URL = `https://igor-news-proxy.herokuapp.com/from=from=2021-04-20&apiKey=${API_KEY}`;

export const getData = () => {
  return fetch(URL)
    .then(response => response.json())
    .catch(err => console.log(err));
};
