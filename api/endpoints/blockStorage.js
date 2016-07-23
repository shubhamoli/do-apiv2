/*
 * blockStorage.js : this will handle requests for "/volumes" endpoint.
 */

// This will handle requests.
var handler = require('../handler.js');

module.exports = {
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
              // make request to "/volumes"
              handler.make_get_request("/volumes", token, callback);
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
                    // make POST request to "/volumes"
                    handler.make_post_request("/volumes", payload, token, callback);
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

  byID: function(drive_id, token, callback){
          // check if 3 (required) arguments are passed
          if(arguments.length === 3){
            // all 3 arguments are passed,
            // check for validity of callback
            if( callback && (callback instanceof Function) ){
              // valid callback,
              // check validity of token
              if(token && typeof token === "string"){
                // valid token
                // check drive_id
                if(drive_id && typeof drive_id === "string"){
                  // drive_id is of valid type
                  // make request to "/voluems/$DRIVE_ID"
                  handler.make_get_request("/volumes/"+drive_id, token, callback);
                }
                else{
                  console.log("Drive ID parameter expected to be string, "+typeof drive_id+" given");
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

  byName: function(drive_name, region, token, callback){
            // check if 4 (required) arguments are passed
            if(arguments.length === 4){
              // all 4 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check region
                  if(region && typeof region === "string"){
                    // region is of valid type
                    // check drive_name for valid type
                    if(drive_name && typeof drive_name === "string"){
                      // valid drive_name
                      // make Query request to "/volumes"
                      handler.make_query_request("/volumes", {"name":drive_name, "region":region}, token, callback);
                    }
                    else{
                      console.log("Drive Name parameter expected to be JSON, "+typeof drive_name+" given");
                    }
                  }
                  else{
                    console.log("Region parameter expected to be string, "+typeof region+" given");
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

  delete: function(drive_id, token, callback){
            // check if 3 (required) arguments are passed
            if(arguments.length === 3){
              // all 3 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check drive_id
                  if(drive_id && typeof drive_id === "string"){
                    // drive_id is of valid type
                    // make a DELETE request to "/volumes/$DRIVE_ID"
                    handler.make_delete_request("/volumes/"+drive_id, token, callback);
                  }
                  else{
                    console.log("Drive ID parameter expected to be string, "+typeof drive_id+" given");
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

  attach: function(payload, drive_id, token, callback){
              // check if 4 (required) arguments are passed
              if(arguments.length === 4){
                // all 4 arguments are passed,
                // check for validity of callback
                if( callback && (callback instanceof Function) ){
                  // valid callback,
                  // check validity of token
                  if(token && typeof token === "string"){
                    // valid token
                    // check drive_id
                    if(drive_id && typeof drive_id === "string"){
                      // drive_id is of valid type
                      // check payload for valid type
                      if(payload && isJSON(payload)){
                        // valid payload
                        // make POST request to "/volumes/$DRIVE_ID/actions"
                        handler.make_post_request("/volumes/"+drive_id+"/actions", payload, token, callback);
                      }
                      else{
                        console.log("Payload parameter expected to be JSON, "+typeof region_slug+" given");
                      }
                    }
                    else{
                      console.log("Drive ID parameter expected to be string, "+typeof drive_id+" given");
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

  attachByName: function(payload, token, callback){
                  // check if 3 (required) arguments are passed
                  if(arguments.length === 3){
                    // all 3 arguments are passed,
                    // check for validity of callback
                    if( callback && (callback instanceof Function) ){
                      // valid callback,
                      // check validity of token
                      if(token && typeof token === "string"){
                        // valid token
                        // check payload
                        if(payload && isJSON(payload)){
                          // payload is of valid type
                          // make a POST request to "/volumes/actions"
                          handler.make_post_request("/volumes/actions", payload , token, callback);
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

  remove: function(payload, drive_id, token, callback){
              // check if 4 (required) arguments are passed
              if(arguments.length === 4){
                // all 4 arguments are passed,
                // check for validity of callback
                if( callback && (callback instanceof Function) ){
                  // valid callback,
                  // check validity of token
                  if(token && typeof token === "string"){
                    // valid token
                    // check drive_id
                    if(drive_id && typeof drive_id === "string"){
                      // drive_id is of valid type
                      // check payload for valid type
                      if(payload && isJSON(payload)){
                        // valid payload
                        // make POST request to "/volumes/$DRIVE_ID/actions"
                        handler.make_post_request("/volumes/"+drive_id+"/actions", payload, token, callback);
                      }
                      else{
                        console.log("Payload parameter expected to be JSON, "+typeof region_slug+" given");
                      }
                    }
                    else{
                      console.log("Drive ID parameter expected to be string, "+typeof drive_id+" given");
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

  removeByName: function(payload, token, callback){
                  // check if 3 (required) arguments are passed
                  if(arguments.length === 3){
                    // all 3 arguments are passed,
                    // check for validity of callback
                    if( callback && (callback instanceof Function) ){
                      // valid callback,
                      // check validity of token
                      if(token && typeof token === "string"){
                        // valid token
                        // check payload
                        if(payload && isJSON(payload)){
                          // payload is of valid type
                          // make a POST request to "/volumes/actions"
                          handler.make_post_request("/volumes/actions", payload , token, callback);
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

  resize: function(payload, drive_id, token, callback){
              // check if 4 (required) arguments are passed
              if(arguments.length === 4){
                // all 4 arguments are passed,
                // check for validity of callback
                if( callback && (callback instanceof Function) ){
                  // valid callback,
                  // check validity of token
                  if(token && typeof token === "string"){
                    // valid token
                    // check drive_id
                    if(drive_id && typeof drive_id === "string"){
                      // drive_id is of valid type
                      // check payload for valid type
                      if(payload && isJSON(payload)){
                        // valid payload
                        // make POST request to "/volumes/$DRIVE_ID/actions"
                        handler.make_post_request("/volumes/"+drive_id+"/actions", payload, token, callback);
                      }
                      else{
                        console.log("Payload parameter expected to be JSON, "+typeof region_slug+" given");
                      }
                    }
                    else{
                      console.log("Drive ID parameter expected to be string, "+typeof drive_id+" given");
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

  allActions: function(drive_id, token, callback){
                // check if 3 (required) arguments are passed
                if(arguments.length === 3){
                  // all 3 arguments are passed,
                  // check for validity of callback
                  if( callback && (callback instanceof Function) ){
                    // valid callback,
                    // check validity of token
                    if(token && typeof token === "string"){
                      // valid token
                      // check drive_id
                      if(drive_id && typeof drive_id === "string"){
                        // drive_id is of valid type
                        // make request to "/volumes/$drive_id/actions"
                        handler.make_get_request("/volumes/"+drive_id+"/actions", token, callback);
                      }
                      else{
                        console.log("Drive ID parameter expected to be string, "+typeof drive_id+" given");
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

  actionByID: function(action_id, drive_id, token, callback){
                // check if 4 (required) arguments are passed
                if(arguments.length === 4){
                  // all 4 arguments are passed,
                  // check for validity of callback
                  if( callback && (callback instanceof Function) ){
                    // valid callback,
                    // check validity of token
                    if(token && typeof token === "string"){
                      // valid token
                      // check drive_id
                      if(drive_id && typeof drive_id === "string"){
                        // drive_id is of valid type
                        // check for valid action_id
                        if(action_id && typeof action_id === "string"){
                          // valid type: action_id
                          // make GET request to "/volumes/$IMAGE_ID/actions/$action_ID"
                          handler.make_get_request("/volumes/"+drive_id+"/actions/"+action_id, token, callback);
                        }
                        else{
                          console.log("Action ID parameter expected to be string, "+typeof action_id+" given");
                        }
                      }
                      else{
                        console.log("Drive ID parameter expected to be string, "+typeof drive_id+" given");
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
