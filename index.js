module.exports = function(url, callback) {
    /**
     * @callback dataCallback
     * @param  {boolean} error True if some error occoured
     * @param {mixed} response The http response
     */
    var http = /^(http:\/\/)/;
    var protocol = url.match(http) ? require('http') : require('https');

    var response = '';

    protocol.get(url, function(res) {
      res
        .on("data", function(chunk) {
          response += chunk;
        })
        .on('end', function() {
          callback(false, response);
        })
        .on('error', function(e) {
          response.end();
          callback(true, e);
        });
    });
}
