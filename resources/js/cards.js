Backend = require('./backend');

class Cards extends Backend {

    constructor() {
        super();
        this.cards = [];
    }

    fetchCards(setId, query, success, failure) {
        if (setId) {
            this.fetchCardsInSet(setId, query, success, failure);
        } else {
            this.fetchAllCards(query, success, failure);
        }
    }

    fetchAllCards(query, success, failure) {
        this.callBackend('/api/getCards', null, data => {
            this.setCards(data);
            success();
        }, query, failure);
    }

    fetchCardsInSet(setId, query, success, failure) {
        this.callBackend('/api/getCardsInSet/' + setId, null, data => {
            this.setCards(data);
            success();
        }, query, failure);
    }

    setCards(m) {
        this.cards = m;
    }

}

module.exports = Cards;