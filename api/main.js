/*
 * Main.js: This file contains all endpoints of DigitalOcean APIv2
 */

// handler to manage all requests
var handler = require('./handler.js');

module.exports = {

  account :  function(token, mainCallback){
                // Check if valid parameters are passed
                if( arguments.length === 2 &&
                    token && typeof token === "string" &&
                    mainCallback && mainCallback instanceof Function){
                  // everything is correct, please proceed
                  // make a get request
                  handler.make_get_request("/account", token, function(err, result){
                    if(err){
                      // if any error occured
                      mainCallback(err, null);
                    }
                    else{
                      // if everything works fine
                      mainCallback(null, result);
                    }
                  });
                }
                else{
                  // some anomalies in parameters
                  var err = "Some arguments missing or invalid Type, Please Try Again!";
                  console.log(err);
                }
  },

  actions : "",

  blockStorage : "",

  domain : "",

  droplets : "",

  images : "",

  SSH: "",

  regions : "",

  sizes : "",

  floatingIP : ""

};
