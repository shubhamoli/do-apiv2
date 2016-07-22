/*
 * floatingIP.js : this will handle requests for "/floating_ips" endpoint.
 */

// This will handle requests.
var handler = require('../handler.js');

module.exports = {

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
              // make request to "/floating_ips"
              handler.make_get_request("/floating_ips", token, callback);
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

  createForDroplet: function(payload, token, callback){
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
                              // make POST request to "/floating_ips"
                              handler.make_post_request("/floating_ips", payload, token, callback);
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

  createForRegion:  function(payload, token, callback){
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
                              // make POST request to "/floating_ips"
                              handler.make_post_request("/floating_ips", payload, token, callback);
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

  byIP: function(ip_addr, token, callback){
          // check if 3 (required) arguments are passed
          if(arguments.length === 3){
            // all 3 arguments are passed,
            // check for validity of callback
            if( callback && (callback instanceof Function) ){
              // valid callback,
              // check validity of token
              if(token && typeof token === "string"){
                // valid token
                // check ip_addr
                if(ip_addr && typeof ip_addr === "string"){
                  // ip_addr is of valid type
                  // make request to "/floating_ips/$IP_ADDR"
                  handler.make_get_request("/floating_ips/"+ip_addr, token, callback);
                }
                else{
                  console.log("IP Address parameter expected to be string, "+typeof ip_addr+" given");
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

  delete: function(ip_addr, token, callback){
            // check if 3 (required) arguments are passed
            if(arguments.length === 3){
              // all 3 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check ip_addr
                  if(ip_addr && typeof ip_addr === "string"){
                    // ip_addr is of valid type
                    // make a DELETE request to "/floating_ips/$IP_ADDR"
                    handler.make_delete_request("/floating_ips/"+ip_addr, token, callback);
                  }
                  else{
                    console.log("IP addr. parameter expected to be string, "+typeof ip_addr+" given");
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

  assign: function(payload, ip_addr, token, callback){
            // check if 4 (required) arguments are passed
            if(arguments.length === 4){
              // all 4 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check ip_addr
                  if(ip_addr && typeof ip_addr === "string"){
                    // ip_addr is of valid type
                    // check paylaod for valid JSON
                    if(isJSON(payload)){
                      // valid JSON
                      // make POST request to "/floating_ips/$IP_ADDR/actions"
                      handler.make_post_request("/floating_ips/"+ip_addr+"/actions", payload, token, callback);
                    }
                    else{
                      console.log("payload parameter expected to be JSON, "+typeof payload+" given");
                    }
                  }
                  else{
                    console.log("IP addr. parameter expected to be string, "+typeof ip_addr+" given");
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

  unassign: function(ip_addr, token, callback){
              // check if 3 (required) arguments are passed
              if(arguments.length === 3){
                // all 3 arguments are passed,
                // check for validity of callback
                if( callback && (callback instanceof Function) ){
                  // valid callback,
                  // check validity of token
                  if(token && typeof token === "string"){
                    // valid token
                    // check ip_addr
                    if(ip_addr && typeof ip_addr === "string"){
                      // ip_addr is of valid type
                      // make POST request to "/floating_ips/$IP_ADDR/actions"
                      handler.make_post_request("/floating_ips/"+ip_addr+"/actions", {"type":"unassign"}, token, callback);
                    }
                    else{
                      console.log("IP Address parameter expected to be string, "+typeof ip_addr+" given");
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

  allActions:function(ip_addr, token, callback){
              // check if 3 (required) arguments are passed
              if(arguments.length === 3){
                // all 3 arguments are passed,
                // check for validity of callback
                if( callback && (callback instanceof Function) ){
                  // valid callback,
                  // check validity of token
                  if(token && typeof token === "string"){
                    // valid token
                    // check ip_addr
                    if(ip_addr && typeof ip_addr === "string"){
                      // ip_addr is of valid type
                      // make GET request to "/floating_ips/$IP_ADDR/actions"
                      handler.make_get_request("/floating_ips/"+ip_addr+"/actions", token, callback);
                    }
                    else{
                      console.log("IP Address parameter expected to be string, "+typeof ip_addr+" given");
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

  actionByID: function(action_id, ip_addr, token, callback){
                // check if 4 (required) arguments are passed
                if(arguments.length === 4){
                  // all 4 arguments are passed,
                  // check for validity of callback
                  if( callback && (callback instanceof Function) ){
                    // valid callback,
                    // check validity of token
                    if(token && typeof token === "string"){
                      // valid token
                      // check ip_addr
                      if(ip_addr && typeof ip_addr === "string"){
                        // ip_addr is of valid type
                        // check for valid action_id
                        if(action_id && typeof action_id === "string"){
                          // valid type: action_id
                          // make GET request to "/floating_ips/$IP_ADDR/actions/$action_ID"
                          handler.make_get_request("/floating_ips/"+ip_addr+"/actions/"+action_id, token, callback);
                        }
                        else{
                          console.log("Action ID parameter expected to be string, "+typeof action_id+" given");
                        }
                      }
                      else{
                        console.log("IP addr. parameter expected to be string, "+typeof ip_addr+" given");
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
