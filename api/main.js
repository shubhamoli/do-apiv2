/*
 * Main.js: This file contains all endpoints of DigitalOcean APIv2
 */


module.exports = {

  account :  require('./endpoints/accounts'),

  actions : {
    all: require('./endpoints/actions').all,
    byID: require('./endpoints/actions').byID
  },

  blockStorage : "",

  domain : "",

  droplets : "",

  images : "",

  SSH: "",

  regions : "",

  sizes : "",

  floatingIP : ""

};
