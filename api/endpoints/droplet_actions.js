/*
 * droplet_actions.js : this will handle requests for "/droplets/$ID/actions" endpoint.
 */

// This will handle requests.
var handler = require('../handler.js');

module.exports = {

  newAction: function(droplet_id, action, token, callback){
              // check if 4 (required) arguments are passed
              if(arguments.length === 3){
                // all 4 arguments are passed,
                // check for validity of callback
                if( callback && (callback instanceof Function) ){
                  // valid callback,
                  // check validity of token
                  if(token && typeof token === "string"){
                    // valid token
                    // check droplet_id
                    if(droplet_id && typeof droplet_id === "string"){
                      // droplet_id is of valid type
                      if( action && typeof action == "string"){
                        // make POST request to "/volumes/$DRIVE_ID/actions"
                        handler.make_post_request("/volumes/"+droplet_id+"/actions", {"type":action}, token, callback);
                      }
                      else{
                        console.log("Action parameter expected to be string, "+typeof action+" given");

                      }
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

  ActionsByPayload: function(payload, droplet_id, token, callback){
              // check if 4 (required) arguments are passed
              if(arguments.length === 4){
                // all 4 arguments are passed,
                // check for validity of callback
                if( callback && (callback instanceof Function) ){
                  // valid callback,
                  // check validity of token
                  if(token && typeof token === "string"){
                    // valid token
                    // check droplet_id
                    if(droplet_id && typeof droplet_id === "string"){
                      // droplet_id is of valid type
                      // check payload for valid type
                      if(payload && isJSON(payload)){
                        // valid payload
                        // make POST request to "/droplets/$DRIVE_ID/actions"
                        handler.make_post_request("/volumes/"+droplet_id+"/actions", payload, token, callback);
                      }
                      else{
                        console.log("Payload parameter expected to be JSON, "+typeof payload+" given");
                      }
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
                console.log(arguments.length + " arguments given, 4 required");
              }
  },

  actionByID: function(action_id, droplet_id, token, callback){
                // check if 4 (required) arguments are passed
                if(arguments.length === 4){
                  // all 4 arguments are passed,
                  // check for validity of callback
                  if( callback && (callback instanceof Function) ){
                    // valid callback,
                    // check validity of token
                    if(token && typeof token === "string"){
                      // valid token
                      // check droplet_id
                      if(droplet_id && typeof droplet_id === "string"){
                        // droplet_id is of valid type
                        // check for valid action_id
                        if(action_id && typeof action_id === "string"){
                          // valid type: action_id
                          // make GET request to "/droplets/$DROPLET_ID/actions/$action_ID"
                          handler.make_get_request("/droplets/"+droplet_id+"/actions/"+action_id, token, callback);
                        }
                        else{
                          console.log("Action ID parameter expected to be string, "+typeof action_id+" given");
                        }
                      }
                      else{
                        console.log("Drive ID parameter expected to be string, "+typeof droplet_id+" given");
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
