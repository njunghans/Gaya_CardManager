Backend = require('../backend');

class Sets extends Backend {

  constructor() {
    super();
    this.sets = [];
  }

  fetchSets(success = null, failure = null) {
    jQuery.ajax({
      url: '/api/getSets',
      success: (s) => {
        this.setSets(s);
        if (typeof success === "function") success();
      },
      error: () => {
        if (typeof failure === "function") failure();
      }
    });
  }

  addCardToSet(setId, cardId, success, failure) {
    data = {
      "set_id": setId,
      "card_id": cardId
    };
    jQuery.ajax({
      url: '/api/addCardToSet',
      type: 'POST',
      data: data,
      success: success,
      error: failure
    });
  }

  setSets(m) {
    this.sets = m;
  }

}

module.exports = Sets;