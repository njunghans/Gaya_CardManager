// require('lightgallery.js/dist/js/lightgallery.min.js');
require('lightgallery.js/dist/js/lightgallery.min.js');
require('lg-thumbnail.js');
require('lg-zoom.js');

Cards = require('./cards.js');
// lightGallery(document.getElementById('animated-thumbnails'));
// n =  require(["lg-zoom"]);



class Gallery {

  constructor(strSelector) {
    this.lg = document.getElementById(strSelector);

    const c = new Cards;
    this.cards = c.cards;
    this.buildCards();

    let oOptions = {
      height: '100%',
      width: '100%',
      thumbnail:true,
      animateThumb: true,
      showThumbByDefault: true
    };

    let _this = this;

    this.lg.addEventListener('onAfterSlide', function(e){
      let tb = document.getElementsByClassName('lg-toolbar')[0];
      let id = _this.cards[e.detail.index].id;
      let url = "/cards/" + id + "/edit";
      tb.insertAdjacentHTML('beforeend', "<a id='edit-icon' class='lg-icon' href='" + url + "'>E</a>")
    });

    this.lg.addEventListener('onBeforeSlide', function(e){
      i = document.getElementById('edit-icon');
      if (i) i.parentNode.removeChild(i);
    }, false);

    lightGallery(this.lg, oOptions);
  }

  buildCards() {
    let cardsHtml = "";
    this.cards.forEach(card => {
      cardsHtml += "<a id='card-" + card.id + "' href='/files/card.png'><img src='/files/card.png'/></a>";
    });
    console.log("HTML", cardsHtml);
    this.lg.insertAdjacentHTML('beforeend', cardsHtml);
  }
}

new Gallery('animated-thumbnails');

// console.log('starting');
// lightGallery(document.getElementById('animated-thumbnails'), {
//   thumbnail:true
// });
// console.log('done');