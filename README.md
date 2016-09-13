# m-http-or-https
A wrapper that choses http or https protocol according to the URL.

##Usage

To use this package, use the following:

```javascript
var httpOrHttps = require('m-http-or-https');

var myUrl = 'https://www.mocky.io/v2/57d82dc00f00005002831406';
var myResponse = '';

httpOrHttps(myUrl, function(error, response) {
      response = JSON.parse(response);
      if (error) {
        console.log('[ERROR]', response);
      } else {
        console.log(response);
      }
    }
  );
```
