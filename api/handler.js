/*
 * handler.js : This file will handle all the requests
 */

var request = require('request');

module.exports = {

  make_get_request :  function(endpoint, token, callback){
                        var options = {
                          url: 'https://api.digitalocean.com/v2'+endpoint,
                          method: 'GET',
                          headers: {
                            'Content-Type':'application/json',
                            'Authorization':'Bearer '+token,
                          }
                        };

                        request(options, function(error, response, body){
                          if(error) {
                            callback(error, null);
                          }
                          else if(response.statusCode !== 200 ){
                            var err = "Invalid status code received: "+response.statusCode;
                            callback(err, null);
                          }
                          else {
                            callback(null, body);
                          }
                    });
  }


};
