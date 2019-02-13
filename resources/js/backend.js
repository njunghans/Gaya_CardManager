class Backend {

  constructor() {

  }

  callBackend(url, data, callback, query, failure, async) {
    jQuery.ajax({
      url: url + '?' + query,
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