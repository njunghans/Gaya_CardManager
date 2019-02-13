Backend = require('./backend');

class Cards extends Backend {

    constructor() {
        super();
        this.cards = [];
    }

    fetchCards(query, success, failure) {
        this.callBackend('/getCards', null,  data => {
            this.setCards(data);
            success();
        }, query, failure);
    }

    setCards(m) {
        this.cards = m;
    }

}


module.exports = Cards;