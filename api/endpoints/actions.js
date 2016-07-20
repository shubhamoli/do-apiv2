/*
 * actions.js : this will handle requests for "/actions" endpoint.
 */

// This will handle requests.
var handler = require('../handler.js');

module.exports = {

  all:  function(token, callback){
          // check if 2 (required) arguments are passed
          if(arguments.length === 2){
            // all 2 arguments are passed,
            // check for validity of callback
            if( callback && (callback instanceof Function) ){
              // valid callback,
              // check validity of token
              if(token && typeof token === "string"){
                // valid token
                // make request to "/actions"
                handler.make_get_request("/actions", token, callback);
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
        },

  byID: function(id, token, callback){
          // check if 3 (required) arguments are passed
          if(arguments.length === 3){
            // all 3 arguments are passed,
            // check for validity of callback
            if( callback && (callback instanceof Function) ){
              // valid callback,
              // check validity of token
              if(token && typeof token === "string"){
                // valid token
                // check id
                if(id && typeof id === "string"){
                  // id is of valid type
                  // make request to "/actions/$ID"
                  handler.make_get_request("/actions/"+id, token, callback);
                }
                else{
                  console.log("ID parameter expected to be string, "+typeof id+" given");
                }

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
            console.log(arguments.length + " arguments given, 3 required");
          }
      }
};
