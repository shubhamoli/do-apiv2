/*
 * droplets.js : this will handle requests for "/droplets/" endpoint.
 */

// This will handle requests.
var handler = require('../handler.js');

module.exports = {

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
                    // make POST request to "/droplets"
                    handler.make_post_request("/droplets", payload, token, callback);
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

    byID: function(droplet_id, token, callback){
            // check if 3 (required) arguments are passed
            if(arguments.length === 3){
              // all 3 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check droplet_id
                  if(droplet_id && typeof droplet_id === "string"){
                    // droplet_id is of valid type
                    // make request to "/droplets/$droplet_id"
                    handler.make_get_request("/droplets/"+droplet_id, token, callback);
                  }
                  else{
                    console.log("Droplet ID parameter expected to be string, "+typeof droplet_id+" given");
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

    all: function(token, callback){
          // check if 2 (required) arguments are passed
          if(arguments.length === 2){
            // all 2 arguments are passed,
            // check for validity of callback
            if( callback && (callback instanceof Function) ){
              // valid callback,
              // check validity of token
              if(token && typeof token === "string"){
                // valid token
                // make request to "/droplets"
                handler.make_get_request("/droplets", token, callback);
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

    byTag: function(tag_name, token, callback){
              // check if 4 (required) arguments are passed
              if(arguments.length === 4){
                // all 4 arguments are passed,
                // check for validity of callback
                if( callback && (callback instanceof Function) ){
                  // valid callback,
                  // check validity of token
                  if(token && typeof token === "string"){
                    // valid token
                    // check tag_name for valid type
                    if(tag_name && typeof tag_name === "string"){
                      // valid tag_name
                      // make Query request to "/droplets"
                      handler.make_query_request("/droplets", {"tag_name":tag_name}, token, callback);
                    }
                    else{
                      console.log("Drive Name parameter expected to be JSON, "+typeof tag_name+" given");
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

    kernels: function(droplet_id, token, callback){
            // check if 3 (required) arguments are passed
            if(arguments.length === 3){
              // all 3 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check droplet_id
                  if(droplet_id && typeof droplet_id === "string"){
                    // droplet_id is of valid type
                    // make request to "/droplets/$droplet_id/kernels"
                    handler.make_get_request("/droplets/"+droplet_id+"/kernels", token, callback);
                  }
                  else{
                    console.log("Droplet ID parameter expected to be string, "+typeof droplet_id+" given");
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

    snapshots: function(droplet_id, token, callback){
            // check if 3 (required) arguments are passed
            if(arguments.length === 3){
              // all 3 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check droplet_id
                  if(droplet_id && typeof droplet_id === "string"){
                    // droplet_id is of valid type
                    // make request to "/droplets/$droplet_id/snapshots"
                    handler.make_get_request("/droplets/"+droplet_id+"/snapshots", token, callback);
                  }
                  else{
                    console.log("Droplet ID parameter expected to be string, "+typeof droplet_id+" given");
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

    backups: function(droplet_id, token, callback){
            // check if 3 (required) arguments are passed
            if(arguments.length === 3){
              // all 3 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check droplet_id
                  if(droplet_id && typeof droplet_id === "string"){
                    // droplet_id is of valid type
                    // make request to "/droplets/$droplet_id/backups"
                    handler.make_get_request("/droplets/"+droplet_id+"/backups", token, callback);
                  }
                  else{
                    console.log("Droplet ID parameter expected to be string, "+typeof droplet_id+" given");
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

    neighbors: function(droplet_id, token, callback){
            // check if 3 (required) arguments are passed
            if(arguments.length === 3){
              // all 3 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check droplet_id
                  if(droplet_id && typeof droplet_id === "string"){
                    // droplet_id is of valid type
                    // make request to "/droplets/$droplet_id/neighbors"
                    handler.make_get_request("/droplets/"+droplet_id+"/neighbors", token, callback);
                  }
                  else{
                    console.log("Droplet ID parameter expected to be string, "+typeof droplet_id+" given");
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

    actions: function(droplet_id, token, callback){
            // check if 3 (required) arguments are passed
            if(arguments.length === 3){
              // all 3 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check droplet_id
                  if(droplet_id && typeof droplet_id === "string"){
                    // droplet_id is of valid type
                    // make request to "/droplets/$droplet_id/actions"
                    handler.make_get_request("/droplets/"+droplet_id+"/actions", token, callback);
                  }
                  else{
                    console.log("Droplet ID parameter expected to be string, "+typeof droplet_id+" given");
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

    delete: function(droplet_id, token, callback){
              // check if 3 (required) arguments are passed
              if(arguments.length === 3){
                // all 3 arguments are passed,
                // check for validity of callback
                if( callback && (callback instanceof Function) ){
                  // valid callback,
                  // check validity of token
                  if(token && typeof token === "string"){
                    // valid token
                    // check droplet_id
                    if(droplet_id && typeof droplet_id === "string"){
                      // droplet_id is of valid type
                      // make a DELETE request to "/droplets/$Droplet_id"
                      handler.make_delete_request("/droplets/"+droplet_id, token, callback);
                    }
                    else{
                      console.log("Droplets ID parameter expected to be string, "+typeof droplet_id+" given");
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
