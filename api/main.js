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

  ssh: {
    all: require('./endpoints/ssh').all,
    byKeyID: require('./endpoints/ssh').byKeyID,
    create: require('./endpoints/ssh').create,
    update: require('./endpoints/ssh').update,
    destroy: require('./endpoints/ssh').destory
  },

  regions : require('./endpoints/regions'),

  sizes : require('./endpoints/sizes'),

  floatingIP : {
    all:require('./endpoints/floatingIP').all,
    createForDroplet:require('./endpoints/floatingIP').createForDroplet,
    createForRegion:require('./endpoints/floatingIP').createForRegion,
    byIP:require('./endpoints/floatingIP').byIP,
    delete:require('./endpoints/floatingIP').delete,
    assign:require('./endpoints/floatingIP').assign,
    unassign:require('./endpoints/floatingIP').unassign,
    allActions:require('./endpoints/floatingIP').allActions,
    actionByID:require('./endpoints/floatingIP').actionByID,

  }

};
