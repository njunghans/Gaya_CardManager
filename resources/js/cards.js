Backend = require('./backend');

class Cards extends Backend {

    constructor() {
        super();
        this.cards = [];
    }

    fetchCards(query, failure) {
        this.callBackend('/getCards', null,  data => {
            this.setCards(data);
        }, query, failure);
    }

    setCards(m) {
        this.cards = m;
    }

}


module.exports = Cards;