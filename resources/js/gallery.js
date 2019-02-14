window.jQuery = require('jquery');
window.$ = require('jquery');

require('lightgallery');
require('lg-thumbnail');
require('lg-zoom');
require('lg-fullscreen');
require('lg-pager');

Cards = require('./cards.js');
Loader = require('./loader.js');

class Gallery {

  constructor() {
    this.cards = new Cards;
    this.loader = new Loader;
    this.lg = $('#animated-thumbnails');

    this.setLgOptions();
    this.addBeforeSlideEvent();
    this.addSearchEvent();
    this.updateGallery();
    this.addAfterSlideEvent();

  }

  updateGallery() {
    this.removeOldCards();
    this.loader.startLoader();
    const query = $('#card-query').val();
    this.cards.fetchCards(query, () => {
      this.loader.removeLoader();
      this.buildCards();
      this.lg.lightGallery(this.lgOptions);
    }, () => {
      console.log('TODO: implement Error Handler: Invalid query');
    });
  }

  buildCards() {
    let cardsHtml = '';
    this.cards.cards.forEach((card) => {
      cardsHtml += '<a id=\'card-' + card.id +
          '\' href=\'/files/card.png\'><img alt="Karte ' + card.name +
          ' " src=\'/files/card.png\'/></a>';
    });
    this.lg.append(cardsHtml);
  }

  addBeforeSlideEvent() {
    this.lg.on('onBeforeSlide.lg', () => {
      $('#edit-icon').remove();
    });
  }

  addAfterSlideEvent() {
    this.lg.on('onAfterSlide.lg', (event, index) => {
      const id = this.cards.cards[index].id;
      const url = '/cards/' + id + '/edit';
      const editIcon = '<a id="edit-icon" class="lg-icon" href="' + url +
          '">E</a>';
      $('.lg-toolbar').append(editIcon);
    });
  }

  addSearchEvent() {
    $('#search-cards').click(() => {
      this.updateGallery();
    });
  }

  removeOldCards() {
    this.lg.empty();
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

new Gallery();
