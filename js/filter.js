const filterForm = document.querySelector('.filter-form');

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

  return filterObject;
};

// const choosenDate = [];
// const date = new Date();

// const DateValues = {
//   'today': date.getDate(),
//   'yesterday': date.getDate() - 1,
//   'thismonth': date.getMonth() + 1,
// };

// export const getDateForFilter = (evt) => {
//   if (choosenDate.includes(DateValues[evt.target.value])) {
//     let index = choosenDate.findIndex(value => value === DateValues[evt.target.value]);
//     choosenDate.splice(index, 1);
//   } else {
//     choosenDate.push(DateValues[evt.target.value]);
//   }

//   return choosenDate;
// };

// filterForm.addEventListener('change', (evt) => {
//   if (evt.target.checked) {
//     const x = new Date();
//     switch(evt.target.value) {
//       case 'today': console.log('TODAY');
//         console.log(x.getDate());
//         break;
//       case 'yesterday': console.log('YESTERDAY');
//         console.log(x.getDate() - 1);
//         break;
//       case 'thismonth': console.log('THIS MONTH');
//         console.log(x.getMonth() + 1);
//         break;
//     }
//   }
// });

// filterForm.addEventListener('change', (evt) => {
//   const choosenDate = getDateForFilter(evt);
//   console.log(choosenDate);
// });
