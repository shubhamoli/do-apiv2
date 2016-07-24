/*
 * domains.js : this will handle requests for "/domains" endpoint.
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
              // make request to "/domains"
              handler.make_get_request("/domains", token, callback);
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
                    // make POST request to "/domains"
                    handler.make_post_request("/domains", payload, token, callback);
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

  byName: function(domain_name, token, callback){
          // check if 3 (required) arguments are passed
          if(arguments.length === 3){
            // all 3 arguments are passed,
            // check for validity of callback
            if( callback && (callback instanceof Function) ){
              // valid callback,
              // check validity of token
              if(token && typeof token === "string"){
                // valid token
                // check domain_name
                if(domain_name && typeof domain_name === "string"){
                  // domain_name is of valid type
                  // make request to "/domains/$DOMAIN_NAME"
                  handler.make_get_request("/domains/"+domain_name, token, callback);
                }
                else{
                  console.log("Domain Name parameter expected to be string, "+typeof domain_name+" given");
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

  delete: function(domain_name, token, callback){
            // check if 3 (required) arguments are passed
            if(arguments.length === 3){
              // all 3 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check domain_name
                  if(domain_name && typeof domain_name === "string"){
                    // domain_name is of valid type
                    // make a DELETE request to "/domains/$DOMAIN_NAME"
                    handler.make_delete_request("/domains/"+domain_name, token, callback);
                  }
                  else{
                    console.log("Domain Name parameter expected to be string, "+typeof domain_name+" given");
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

  allRecords: function(domain_name, token, callback){
                // check if 3 (required) arguments are passed
                if(arguments.length === 3){
                  // all 3 arguments are passed,
                  // check for validity of callback
                  if( callback && (callback instanceof Function) ){
                    // valid callback,
                    // check validity of token
                    if(token && typeof token === "string"){
                      // valid token
                      // check domain_name
                      if(domain_name && typeof domain_name === "string"){
                        // domain_name is of valid type
                        // make request to "/domains/$domain_name/records"
                        handler.make_get_request("/domains/"+domain_name+"/records", token, callback);
                      }
                      else{
                        console.log("Domain Name parameter expected to be string, "+typeof domain_name+" given");
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

  createRecord: function(payload, domain_name, token, callback){
                  // check if 4 (required) arguments are passed
                  if(arguments.length === 4){
                    // all 4 arguments are passed,
                    // check for validity of callback
                    if( callback && (callback instanceof Function) ){
                      // valid callback,
                      // check validity of token
                      if(token && typeof token === "string"){
                        // valid token
                        // check domain_name
                        if(domain_name && typeof domain_name === "string"){
                          // domain_name is of valid type
                          // check for valid payload
                          if(payload && isJSON(payload)){
                            // valid type: payload
                            // make POST request to "/domains/$DOMAIN_NAME/records/"
                            handler.make_post_request("/domains/"+domain_name+"/records/", payload,  token, callback);
                          }
                          else{
                            console.log("Payload parameter expected to be JSON, "+typeof payload+" given");
                          }
                        }
                        else{
                          console.log("Domain Name parameter expected to be string, "+typeof domain_name+" given");
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

  recordByID: function(record_id, domain_name, token, callback){
                // check if 4 (required) arguments are passed
                if(arguments.length === 4){
                  // all 4 arguments are passed,
                  // check for validity of callback
                  if( callback && (callback instanceof Function) ){
                    // valid callback,
                    // check validity of token
                    if(token && typeof token === "string"){
                      // valid token
                      // check domain_name
                      if(domain_name && typeof domain_name === "string"){
                        // domain_name is of valid type
                        // check for valid record_id
                        if(record_id && typeof record_id === "string"){
                          // valid type: record_id
                          // make GET request to "/domains/$DOMAIN_NAME/records/$RECORD_ID"
                          handler.make_get_request("/domains/"+domain_name+"/records/"+record_id, token, callback);
                        }
                        else{
                          console.log("Record ID parameter expected to be string, "+typeof record_id+" given");
                        }
                      }
                      else{
                        console.log("Domain Name parameter expected to be string, "+typeof domain_name+" given");
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

  deleteRecord: function(record_id, domain_name, token, callback){
                  // check if 4 (required) arguments are passed
                  if(arguments.length === 4){
                    // all 4 arguments are passed,
                    // check for validity of callback
                    if( callback && (callback instanceof Function) ){
                      // valid callback,
                      // check validity of token
                      if(token && typeof token === "string"){
                        // valid token
                        // check domain_name
                        if(domain_name && typeof domain_name === "string"){
                          // domain_name is of valid type
                          // check for valid record_id
                          if(record_id && typeof record_id === "string"){
                            // valid type: record_id
                            // make DELETE request to "/domains/$DOMAIN_NAME/records/$RECORD_ID"
                            handler.make_delete_request("/domains/"+domain_name+"/records/"+record_id, token, callback);
                          }
                          else{
                            console.log("Record ID parameter expected to be string, "+typeof record_id+" given");
                          }
                        }
                        else{
                          console.log("Domain Name parameter expected to be string, "+typeof domain_name+" given");
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

  updateRecord: function(payload, record_id, domain_name, token, callback){
                  // check if 4 (required) arguments are passed
                  if(arguments.length === 4){
                    // all 4 arguments are passed,
                    // check for validity of callback
                    if( callback && (callback instanceof Function) ){
                      // valid callback,
                      // check validity of token
                      if(token && typeof token === "string"){
                        // valid token
                        // check domain_name
                        if(domain_name && typeof domain_name === "string"){
                          // domain_name is of valid type
                          // check for valid record_id
                          if(record_id && typeof record_id === "string"){
                            // valid type: record_id
                            // check for payload
                            if( payload && isJSON(payload)){
                              // good: paylaad is OK
                              // make PUT request to "/domains/$DOMAIN_NAME/records/$RECORD_ID"
                              handler.make_put_request("/domains/"+domain_name+"/records/"+record_id, payload, token, callback);
                            }
                            else{
                              console.log("Payload parameter expected to be JSON, "+typeof payload+" given");
                            }

                          }
                          else{
                            console.log("Record ID parameter expected to be string, "+typeof record_id+" given");
                          }
                        }
                        else{
                          console.log("Domain Name parameter expected to be string, "+typeof domain_name+" given");
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
