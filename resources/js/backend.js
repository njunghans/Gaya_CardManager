class Backend {

  constructor() {

  }

  callBackend(baseUrl, data, callback, query, failure, async, type = "GET") {
    const url = baseUrl + '?' + query;
    jQuery.ajax({
      url: url,
      type: type,
      async: async,
      data: data,
      success: function(d) {
        console.log(d);
        callback(d);
      },
      error: function(d) {
        console.log(d);
        failure(d);
      },
    });
  }
}

module.exports = Backend;