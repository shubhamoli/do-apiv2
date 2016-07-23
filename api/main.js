/*
 * Main.js: This file contains all endpoints of DigitalOcean APIv2
 */


module.exports = {

  account :  require('./endpoints/accounts'),

  actions : {
    all: require('./endpoints/actions').all,
    byID: require('./endpoints/actions').byID
  },

  blockStorage : {
    all: require('./endpoints/blockStorage').all,
    create: require('./endpoints/blockStorage').create,
    byID: require('./endpoints/blockStorage').byID,
    byName: require('./endpoints/blockStorage').byName,
    delete: require('./endpoints/blockStorage').delete,
    attach: require('./endpoints/blockStorage').attach,
    attachByName: require('./endpoints/blockStorage').attachByName,
    remove: require('./endpoints/blockStorage').remove,
    removeByName: require('./endpoints/blockStorage').removeByName,
    resize: require('./endpoints/blockStorage').resize,
    allActions: require('./endpoints/blockStorage').allActions,
    actionByID: require('./endpoints/blockStorage').actionsByID

  },

  domain : "",

  droplets : "",

  images : {
    all: require('./endpoints/images').all,
    allDistribution: require('./endpoints/images').allDistribution,
    allApplication: require('./endpoints/images').allApplication,
    userImage: require('./endpoints/images').userImage,
    allActions: require('./endpoints/images').allActions,
    byID: require('./endpoints/images').byID,
    bySlug: require('./endpoints/images').bySlug,
    update: require('./endpoints/images').update,
    delete: require('./endpoints/images').delete,
    transfer: require('./endpoints/images').transfer,
    convert: require('./endpoints/images').convert,
    actionByID: require('./endpoints/images').actionByID,
  },

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
