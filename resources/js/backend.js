class Backend {

  constructor() {

  }

  callBackend(url, data, callback, failure, async) {
    jQuery.ajax({
      url: url,
      async: async,
      data: data,
      success: function(d) {
        callback(d);
      },
      error: function(d) {
        failure(d);
      },
    });
  }
}

module.exports = Backend;