/*
 * account.js : this will handle requests for "/account" endpoint.
 */

// This will handle requests.
var handler = require('../handler.js');

module.exports =  function(token, callback){
                  // check if 2 (required) arguments are passed
                  if(arguments.length === 2){
                    // all 2 arguments are passed,
                    // check for validity of callback
                    if( callback && (callback instanceof Function) ){
                      // valid callback,
                      // check validity of token
                      if(token && typeof token === "string"){
                        // valid token
                        // make request to "/account"
                        handler.make_get_request("/account", token, callback);
                      }
                      else{
                        console.log("Please provide a valid Access Token");
                      }
                    }
                    else{
                      console.log("Please provide a valid callback");
                    }

                  }
                  else{
                    console.log(arguments.length + " arguments given, 2 required");
                  }
};
