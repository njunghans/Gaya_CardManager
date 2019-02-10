class Backend {

  constructor() {

  }

  callBackend(url, callback, async = false, failure = null) {
    jQuery.ajax({
      url: url,
      async: async,
      success: function(data) {
        callback(data);
      },
      error: function(data) {
        failure(data);
      },
    });
  }
}

module.exports = Backend;