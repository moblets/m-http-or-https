var httpOrHttps = require('../index');

describe('argsHelper', function() {

  it('should respond with the Json for HTTP request', function() {
    var myHttpUrl = 'http://www.mocky.io/v2/57d82dc00f00005002831406';

    httpOrHttps(myHttpUrl, function(err, res) {
      if (err) {
        console.log('[ERROR]', response);
      } else {
        res = JSON.parse(res);
        expect(err).toBe(false);
        expect(res['the-key']).toBe('the-value');
        expect(res.key).toBe('value');
      }
    });
  });

  it('should respond with the Json for HTTPS request', function() {
    var myHttpUrl = 'https://www.mocky.io/v2/57d82dc00f00005002831406';

    httpOrHttps(myHttpUrl, function(err, res) {
      if (err) {
        console.log('[ERROR]', response);
      } else {
        res = JSON.parse(res);
        expect(err).toBe(false);
        expect(res['the-key']).toBe('the-value');
        expect(res.key).toBe('value');
      }
    });
  });
});
