window.jQuery = require('jquery');
require('lightgallery.js/dist/js/lightgallery.min.js');
require('lg-thumbnail.js');
require('lg-zoom.js');
require('lg-fullscreen.js');
require('lg-pager.js');

Cards = require('./cards.js');
Loader = require('./loader.js');

class Gallery {

  constructor(strSelector) {
    this.cards = new Cards;
    this.loader = new Loader;
    this.lg = document.getElementById(strSelector);

    this.setLgOptions();
    this.addBeforeSlideEvent();
    this.addSearchEvent();
    this.updateGallery();

  }

  updateGallery() {
    this.removeOldCards();
    this.loader.startLoader();
    const query = document.getElementById('card-query').value;
    let _this = this;
    this.cards.fetchCards(query, () => {
      _this.loader.removeLoader();
      _this.buildCards();
      _this.addAfterSlideEvent();
      lightGallery(this.lg, this.lgOptions);
    }, () => {
      console.log('TODO: implement Error Handler: Invalid query');
    });
  }

  buildCards() {
    let cardsHtml = '';
    this.cards.cards.forEach(card => {
      cardsHtml += '<a id=\'card-' + card.id +
          '\' href=\'/files/card.png\'><img src=\'/files/card.png\'/></a>';
    });
    this.lg.insertAdjacentHTML('beforeend', cardsHtml);
  }


  addBeforeSlideEvent() {
    this.lg.addEventListener('onBeforeSlide', function(e) {
      i = document.getElementById('edit-icon');
      if (i) i.parentNode.removeChild(i);
    });
  }

  addAfterSlideEvent() {
    const _this = this;
    _this.lg.addEventListener('onAfterSlide', function(e) {
      const tb = document.getElementsByClassName('lg-toolbar')[0];
      const id = _this.cards.cards[e.detail.index].id;
      const url = '/cards/' + id + '/edit';
      tb.insertAdjacentHTML('beforeend',
          '<a id=\'edit-icon\' class=\'lg-icon\' href=\'' + url + '\'>E</a>');
    });
  }

  addSearchEvent() {
    const searchButton = document.getElementById('search-cards');
    const _this = this;
    searchButton.addEventListener('click', function(e) {
      _this.updateGallery();
    });
  }

  removeOldCards() {
    while (this.lg.firstChild) {
      this.lg.removeChild(this.lg.firstChild);
    }
  }

  setLgOptions(opts = null) {
    if (!opts) {
      opts = {
        height: '100%',
        width: '100%',
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: true,
      };
    }
    this.lgOptions = opts;
  }

}

new Gallery('animated-thumbnails');
