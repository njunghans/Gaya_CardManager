require('./utils/initJQuery');
Gallery = require('./modules/gallery');

const setId = $('#setId').text();
new Gallery(setId);