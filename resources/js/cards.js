Backend = require('./backend');

class Cards extends Backend {

    constructor() {
        super();
        this.cards = [];
        this.fetchAllCards();
    }

    fetchAllCards() {
        this.callBackend('/getCards', data => {
            this.setCards(data);
        }, true);
    }

    setCards(m) {
        this.cards = m;
    }

}

module.exports = Cards;