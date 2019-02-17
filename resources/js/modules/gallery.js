require('../utils/initJQuery');

require('lightgallery');
require('lg-thumbnail');
require('lg-zoom');
require('lg-pager');
require('lg-fullscreen');
require('lg-hash');

Cards = require('../backend/models/cards.js');
Loader = require('../utils/loader.js');
Sets = require('../backend/models/sets.js');
Menu = require('../utils/collapsibleMenu.js');

class Gallery {

    constructor(setId = null) {
        this.cards = new Cards;
        this.sets = new Sets;
        this.sets.fetchSets();
        this.loader = new Loader;
        this.setId = setId;
        this.lg = $('#animated-thumbnails');

        this.addBeforeSlideEvent();
        this.addAfterSlideEvent();
        this.setLgOptions();
        this.addSearchEvent();
        this.updateGallery(this.setId);

    }

    updateGallery(setId = null) {
        this.removeOldCards();
        this.loader.startLoader();
        const query = $('#card-query').val();
        this.cards.fetchCards(setId, query, () => {
            this.loader.removeLoader();
            this.buildCards();
            this.initLightGallery();
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

    initLightGallery() {
        if (this.lg.data('lightGallery')) {
            this.lg.data('lightGallery').destroy(true);
        }
        this.lg.lightGallery(this.lgOptions);
    }

    addBeforeSlideEvent() {
        this.lg.on('onBeforeSlide.lg', () => {
            $('#edit-icon').remove();
            $('#set-list').remove();
        });
    }

    addAfterSlideEvent() {
        this.lg.on('onAfterSlide.lg ', (event, index) => {

            const cardId = this.cards.cards[index].id;
            const editUrl = '/cards/' + cardId + '/edit';
            const editIcon = '<a id="edit-icon" class="lg-icon" href="' +
                editUrl +
                '">E</a>';
            $('.lg-toolbar').append(editIcon);
            this.addSetList();
            this.addAddCardToSetEvent(cardId);
        });
    }

    addAddCardToSetEvent(cardId) {
        $('.set').each((i, s) => {
            const $s = $(s);
            const setId = $s.attr('id').replace(/^\D+/g, '');
            $s.click(() => {
                this.sets.addCardToSet(setId, cardId, () => {
                    alert('added card');
                    console.log('added card to set', cardId, this.setId);
                }, () => {
                    console.log('FAILED');
                });
            });
        });
    }

    addSearchEvent() {
        $('#search-cards').click(() => {
            this.updateGallery(this.setId);
        });
    }

    removeOldCards() {
        this.lg.empty();
    }

    addSetList() {
        $('.lg-toolbar').append('<div id="set-list" class="lg-icon"></div>');
        let setsHtml = [];
        this.sets.sets.forEach((set) => {
            setsHtml.push(
                '<a id ="set-' + set.id + '" class="set">' + set.name +
                '</set>');
        });
        new Menu($('#set-list'), '+', setsHtml);
    }

    setLgOptions(opts = null) {
        if (!opts) {
            opts = {
                height: '100%',
                width: '100%',
                thumbnail: true,
                animateThumb: true,
                showThumbByDefault: true,
                closable: false,
                preload: 10

            };
        }
        this.lgOptions = opts;
    }

}

module.exports = Gallery;