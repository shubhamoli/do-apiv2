/*
 * sizes.js : this will handle requests for "/sizes" endpoint.
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
                        // make request to "/sizes"
                        handler.make_get_request("/sizes", token, callback);
                      }
                      else{
                        console.log("Token parameter expected to be string, "+typeof token+" given");
                      }
                    }
                    else{
                      console.log("callback expected to be Function, "+typeof callback+" given");
                    }

                  }
                  else{
                    console.log(arguments.length + " arguments given, 2 required");
                  }
};
