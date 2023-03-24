var store = require('app-store-scraper');

store.search({
  term: 'Maps',
  num: 30,
  page: 1,
  country : 'us',
  lang: 'lang'
})
.then(console.log)
.catch(console.log);