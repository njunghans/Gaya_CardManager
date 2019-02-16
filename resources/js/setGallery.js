require('./initJQuery');
Gallery = require('./gallery');

const setId = $('#setId').text();
new Gallery(setId);