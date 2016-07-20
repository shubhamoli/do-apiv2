/*
 * ssh.js : this will handle requests for "/account/keys" endpoint.
 */

// This will handle requests.
var handler = require('../handler.js');

module.exports =  {

  all:function(token, callback){
        // check if 2 (required) arguments are passed
        if(arguments.length === 2){
          // all 2 arguments are passed,
          // check for validity of callback
          if( callback && (callback instanceof Function) ){
            // valid callback,
            // check validity of token
            if(token && typeof token === "string"){
              // valid token
              // make request to "/account/keys"
              handler.make_get_request("/account/keys", token, callback);
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

  byKeyID:function(key_id, token, callback){
            // check if 3 (required) arguments are passed
            if(arguments.length === 3){
              // all 3 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check key_id
                  if(key_id && typeof key_id === "string"){
                    // key_id is of valid type
                    // make request to "/account/keys/$KEY_ID"
                    handler.make_get_request("/account/keys/"+key_id, token, callback);
                  }
                  else{
                    console.log("Key ID parameter expected to be string, "+typeof key_id+" given");
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
  },


  create: function(payload, token, callback){
            // check if 3 (required) arguments are passed
            if(arguments.length === 3){
              // all 3 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check payload for valid type
                  if(isJSON(payload)){
                    // valid JSON
                    // make POST request to "/account/keys/"
                    handler.make_post_request("/account/keys/", payload, token, callback);
                  }
                  else{
                    console.log("payload parameter expected to be JSON, "+typeof payload+" given");
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
  },

  update: function(payload, key_id, token, callback){
            // check if 4 (required) arguments are passed
            if(arguments.length === 4){
              // all 4 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check key_id
                  if(key_id && typeof key_id === "string"){
                    // key_id is of valid type
                    // check paylaod for valid JSON
                    if(isJSON(payload)){
                      // valid JSON
                      // make PUT request to "/account/keys/$KEY_ID"
                      handler.make_put_request("/account/keys/"+key_id, payload, token, callback);
                    }
                    else{
                      console.log("payload parameter expected to be JSON, "+typeof payload+" given");
                    }
                  }
                  else{
                    console.log("Key ID parameter expected to be string, "+typeof key_id+" given");
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
              console.log(arguments.length + " arguments given, 4 required");
            }
  },

  destroy: function(key_id, token, callback){
            // check if 3 (required) arguments are passed
            if(arguments.length === 3){
              // all 3 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check key_id
                  if(key_id && typeof key_id === "string"){
                    // key_id is of valid type
                    // make a DELETE request to "/account/keys/$KEY_ID"
                    handler.make_delete_request("/account/keys/"+key_id, token, callback);
                  }
                  else{
                    console.log("Key ID parameter expected to be string, "+typeof key_id+" given");
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




/*
 * isJSON function to check if a variable is valid JSON object or not
 *
 * @param : object to check
 *
 * return : bool
 */
function isJSON (obj) {
   if (typeof obj != 'string')
        obj = JSON.stringify(obj);

   try {
       JSON.parse(obj);
       return true;
   } catch (e) {
       return false;
   }
}
