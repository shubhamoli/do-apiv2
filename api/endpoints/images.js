/*
 * images.js : this will handle requests for "/images" endpoint.
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
              // make request to "/images"
              handler.make_get_request("/images", token, callback);
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

  allDistribution:  function(token, callback){
                      // check if 2 (required) arguments are passed
                      if(arguments.length === 2){
                        // all 2 arguments are passed,
                        // check for validity of callback
                        if( callback && (callback instanceof Function) ){
                          // valid callback,
                          // check validity of token
                          if(token && typeof token === "string"){
                            // valid token
                            // make request to "/images?type=distribution"
                            handler.make_query_request("/images", {"type":"distribution"}, token, callback);
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

  allApplication:   function(token, callback){
                      // check if 2 (required) arguments are passed
                      if(arguments.length === 2){
                        // all 2 arguments are passed,
                        // check for validity of callback
                        if( callback && (callback instanceof Function) ){
                          // valid callback,
                          // check validity of token
                          if(token && typeof token === "string"){
                            // valid token
                            // make request to "/images?type=application"
                            handler.make_query_request("/images", {"type":"application"}, token, callback);
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

  userImage:  function(token, callback){
                // check if 2 (required) arguments are passed
                if(arguments.length === 2){
                  // all 2 arguments are passed,
                  // check for validity of callback
                  if( callback && (callback instanceof Function) ){
                    // valid callback,
                    // check validity of token
                    if(token && typeof token === "string"){
                      // valid token
                      // make request to "/images?private=true"
                      handler.make_query_request("/images", {"private":"true"}, token, callback);
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

  allActions: function(image_id, token, callback){
                // check if 3 (required) arguments are passed
                if(arguments.length === 3){
                  // all 3 arguments are passed,
                  // check for validity of callback
                  if( callback && (callback instanceof Function) ){
                    // valid callback,
                    // check validity of token
                    if(token && typeof token === "string"){
                      // valid token
                      // check image_id
                      if(image_id && typeof image_id === "string"){
                        // image_id is of valid type
                        // make request to "/images/$image_id/actions"
                        handler.make_get_request("/images/"+image_id+"/actions", token, callback);
                      }
                      else{
                        console.log("Image ID parameter expected to be string, "+typeof image_id+" given");
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

  byID: function(image_id, token, callback){
          // check if 3 (required) arguments are passed
          if(arguments.length === 3){
            // all 3 arguments are passed,
            // check for validity of callback
            if( callback && (callback instanceof Function) ){
              // valid callback,
              // check validity of token
              if(token && typeof token === "string"){
                // valid token
                // check image_id
                if(image_id && typeof image_id === "string"){
                  // image_id is of valid type
                  // make request to "/images/$image_id"
                  handler.make_get_request("/images/"+image_id, token, callback);
                }
                else{
                  console.log("Image ID parameter expected to be string, "+typeof image_id+" given");
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

  bySlug: function(image_slug, token, callback){
            // check if 3 (required) arguments are passed
            if(arguments.length === 3){
              // all 3 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check image_slug
                  if(image_slug && typeof image_slug === "string"){
                    // image_slug is of valid type
                    // make request to "/images/$image_slug"
                    handler.make_get_request("/images/"+image_slug, token, callback);
                  }
                  else{
                    console.log("Image ID parameter expected to be string, "+typeof image_slug+" given");
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

  update: function(image_name, image_id, token, callback){
            // check if 4 (required) arguments are passed
            if(arguments.length === 4){
              // all 4 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check image_id
                  if(image_id && typeof image_id === "string"){
                    // image_id is of valid type
                    // check image_name for valid type
                    if(image_name && typeof image_name === "string"){
                      // valid image_name
                      // make PUT request to "/images/$IMAGE_ID"
                      handler.make_put_request("/images/"+image_id, {"name":image_name}, token, callback);
                    }
                    else{
                      console.log("Image name parameter expected to be JSON, "+typeof image_name+" given");
                    }
                  }
                  else{
                    console.log("image ID parameter expected to be string, "+typeof image_id+" given");
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

  delete: function(image_id, token, callback){
            // check if 3 (required) arguments are passed
            if(arguments.length === 3){
              // all 3 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check image_id
                  if(image_id && typeof image_id === "string"){
                    // image_id is of valid type
                    // make a DELETE request to "/images/$IMAGES_ID"
                    handler.make_delete_request("/images/"+image_id, token, callback);
                  }
                  else{
                    console.log("Image ID parameter expected to be string, "+typeof image_id+" given");
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

  transfer: function(region_slug, image_id, token, callback){
              // check if 4 (required) arguments are passed
              if(arguments.length === 4){
                // all 4 arguments are passed,
                // check for validity of callback
                if( callback && (callback instanceof Function) ){
                  // valid callback,
                  // check validity of token
                  if(token && typeof token === "string"){
                    // valid token
                    // check image_id
                    if(image_id && typeof image_id === "string"){
                      // image_id is of valid type
                      // check region_slug for valid type
                      if(region_slug && typeof region_slug === "string"){
                        // valid region_slug
                        // make POST request to "/images/$IMAGE_ID/actions"
                        handler.make_post_request("/images/"+image_id+"/actions", {"type":"transfer", "region":region_slug}, token, callback);
                      }
                      else{
                        console.log("Region Slug parameter expected to be JSON, "+typeof region_slug+" given");
                      }
                    }
                    else{
                      console.log("image ID parameter expected to be string, "+typeof image_id+" given");
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

  convert:function(image_id, token, callback){
            // check if 3 (required) arguments are passed
            if(arguments.length === 3){
              // all 3 arguments are passed,
              // check for validity of callback
              if( callback && (callback instanceof Function) ){
                // valid callback,
                // check validity of token
                if(token && typeof token === "string"){
                  // valid token
                  // check image_id
                  if(image_id && typeof image_id === "string"){
                    // image_id is of valid type
                    // make a POST request to "/images/$IMAGES_ID/actions"
                    handler.make_post_request("/images/"+image_id+"/actions", {"type":"convert"} , token, callback);
                  }
                  else{
                    console.log("Image ID parameter expected to be string, "+typeof image_id+" given");
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

  actionByID: function(action_id, image_id, token, callback){
                // check if 4 (required) arguments are passed
                if(arguments.length === 4){
                  // all 4 arguments are passed,
                  // check for validity of callback
                  if( callback && (callback instanceof Function) ){
                    // valid callback,
                    // check validity of token
                    if(token && typeof token === "string"){
                      // valid token
                      // check image_id
                      if(image_id && typeof image_id === "string"){
                        // image_id is of valid type
                        // check for valid action_id
                        if(action_id && typeof action_id === "string"){
                          // valid type: action_id
                          // make GET request to "/images/$IMAGE_ID/actions/$action_ID"
                          handler.make_get_request("/images/"+image_id+"/actions/"+action_id, token, callback);
                        }
                        else{
                          console.log("Action ID parameter expected to be string, "+typeof action_id+" given");
                        }
                      }
                      else{
                        console.log("Image ID parameter expected to be string, "+typeof image_id+" given");
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
