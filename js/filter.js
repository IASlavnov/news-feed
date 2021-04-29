const todayDate = new Date();

const filterObject = {
  today: false,
  yesterday: false,
  thisMonth: false,
};

export const setFilterObject = (evt) => {
  switch (evt.target.value) {
    case 'today': filterObject.today = !filterObject.today;
      break;
    case 'yesterday': filterObject.yesterday = !filterObject.yesterday;
      break;
    case 'thisMonth': filterObject.thisMonth = !filterObject.thisMonth;
  }
};

const filterToday = (articleDate) => {
  if (filterObject.today) {
    return articleDate.getDate() === todayDate.getDate();
  }
  return true;
};

const filterYesterday = (articleDate) => {
  if (filterObject.yesterday) {
    return articleDate.getDate() === todayDate.getDate() - 1;
  }
  return true;
};

const filterThisMonth = (articleDate) => {
  if (filterObject.thisMonth) {
    return articleDate.getMonth() === todayDate.getMonth();
  }
  return true;
}

export const getFilteredData = (article) => {
  const articleDate = new Date(Date.parse(article.publishedAt));

  if ((filterObject.today && !filterObject.yesterday && !filterObject.thisMonth) ||
    (!filterObject.today && filterObject.yesterday && !filterObject.thisMonth) ||
    (!filterObject.thisMonth && !filterObject.yesterday && filterObject.thisMonth)) {
      return filterToday(articleDate) && filterYesterday(articleDate) && filterThisMonth(articleDate);
  } else if (filterObject.today && filterObject.yesterday) {
    return filterToday(articleDate) || filterYesterday(articleDate);
  } else if (filterObject.today && filterObject.thisMonth) {
    return filterToday(articleDate) || filterThisMonth(articleDate);
  } else if (filterObject.yesterday && filterObject.thisMonth) {
    return filterYesterday(articleDate) || filterThisMonth(articleDate);
  } else {
    return filterToday(articleDate) && filterYesterday(articleDate) && filterThisMonth(articleDate);
  }
};
