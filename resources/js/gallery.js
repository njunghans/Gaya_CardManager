// require('lightgallery.js/dist/js/lightgallery.min.js');
require('lightgallery.js/dist/js/lightgallery.min.js');
require('lg-thumbnail.js');
require('lg-zoom.js');

Cards = require('./cards.js');
Utils = require('./utils.js');
// lightGallery(document.getElementById('animated-thumbnails'));
// n =  require(["lg-zoom"]);



class Gallery {

  constructor(strSelector) {
    let _this = this;
    _this.cards = [];
    const c = new Cards;
    const u = new Utils;
    this.lg = document.getElementById(strSelector);
    u.startLoader();


    let oOptions = {
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


    jQuery(document).ajaxComplete(function (event, request, settings) {
      _this.cards = c.cards;
      u.removeLoader();
      _this.buildCards();

      _this.lg.addEventListener('onAfterSlide', function(e){
        let tb = document.getElementsByClassName('lg-toolbar')[0];
        let id = _this.cards[e.detail.index].id;
        let url = "/cards/" + id + "/edit";
        tb.insertAdjacentHTML('beforeend', "<a id='edit-icon' class='lg-icon' href='" + url + "'>E</a>")
      });

      lightGallery(this.lg, oOptions);
    });


  }

  buildCards() {
    let cardsHtml = "";
    this.cards.forEach(card => {
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