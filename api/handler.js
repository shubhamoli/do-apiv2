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
  },

  make_delete_request :  function(endpoint, token, callback){
                            var options = {
                              url: 'https://api.digitalocean.com/v2'+endpoint,
                              method: 'DELETE',
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

  },

  make_post_request: function(endpoint, payload, token, callback){
                        var options = {
                          url: 'https://api.digitalocean.com/v2'+endpoint,
                          method: 'POST',
                          json:payload,
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
  },

  make_put_request: function(endpoint, payload, token, callback){
                        var options = {
                          url: 'https://api.digitalocean.com/v2'+endpoint,
                          method: 'PUT',
                          json: payload,
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
  },

  make_query_request :  function(endpoint, qs, token, callback){
                          var options = {
                            url: 'https://api.digitalocean.com/v2'+endpoint,
                            method: 'GET',
                            qs: qs,
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

  },



};
