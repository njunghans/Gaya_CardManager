class Backend {

  constructor() {

  }

  callBackend(baseUrl, data, callback, query, failure, async) {
    const url = baseUrl + '?' + query;
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