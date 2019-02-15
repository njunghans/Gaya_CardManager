require('./initJQuery');
Gallery = require('./gallery');

console.log("init");
e = $('#setId');
const setId = e.text();
console.log("setid", setId, e);
new Gallery(setId);