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
                // make request to "/account"
                handler.make_get_request("/actions", token, callback);
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
                  // make request to "/account"
                  console.log("/actions/"+id);
                  handler.make_get_request("/actions/"+id, token, callback);
                }
                else{
                  console.log("Please provide a valid ID");
                }
                // make request to "/account"
                handler.make_get_request("/actions", token, callback);
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
            console.log(arguments.length + " arguments given, 3 required");
          }
      }
};
