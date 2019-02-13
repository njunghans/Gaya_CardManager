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

    let lgOptions = {
      height: '100%',
      width: '100%',
      thumbnail:true,
      animateThumb: true,
      showThumbByDefault: true
    };

    this.lg.addEventListener('onBeforeSlide', function(e){
      i = document.getElementById('edit-icon');
      if (i) i.parentNode.removeChild(i);
    }, false);

    const searchButton = document.getElementById('search-cards');
    let _this = this;
    searchButton.addEventListener('click', function(e) {
      _this.updateGallery();
    });
    this.updateGallery();

    lightGallery(this.lg, lgOptions);

  }

  updateGallery() {
    let _this = this;
    while (this.lg.firstChild) {
      this.lg.removeChild(this.lg.firstChild);
    }
    this.loader.startLoader();
    const query = document.getElementById('card-query').value;
    this.cards.fetchCards(query, () => {
      console.log('Invalid query');
    });
    jQuery(document).ajaxComplete(function (event, request, settings) {
      let cards = _this.cards.cards;
      _this.loader.removeLoader();
      _this.buildCards();

      _this.lg.addEventListener('onAfterSlide', function(e) {
        let tb = document.getElementsByClassName('lg-toolbar')[0];
        let id = cards[e.detail.index].id;
        let url = "/cards/" + id + "/edit";
        tb.insertAdjacentHTML('beforeend',
            "<a id='edit-icon' class='lg-icon' href='" + url + "'>E</a>");
      });
    });
  }

  buildCards() {
    let cardsHtml = "";
    this.cards.cards.forEach(card => {
      cardsHtml += "<a id='card-" + card.id + "' href='/files/card.png'><img src='/files/card.png'/></a>";
    });
    this.lg.insertAdjacentHTML('beforeend', cardsHtml);
  }
}

new Gallery('animated-thumbnails');

// console.log('starting');
// lightGallery(document.getElementById('animated-thumbnails'), {
//   thumbnail:true
// });
// console.log('done');