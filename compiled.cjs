'use strict';

let today, tomorrow;

var index = () => {
  if (today && (Date.now() < tomorrow)) return today

  const d = new Date();
  const year = `${d.getFullYear()}`;
  const month = `0${(d.getMonth() + 1)}`.slice(-2);
  const day = `0${d.getDate()}`.slice(-2);

  d.setDate(d.getDate() + 1);
  d.setHours(0, 0, 0, 0);

  tomorrow = d.valueOf();
  const end = tomorrow - 1;

  d.setDate(d.getDate() - 1);

  const start = d.valueOf();
  today = { full: `${year}${month}${day}`, year, month, day, start, end };

  return Object.assign({ fresh: true }, today)
};

module.exports = index;
