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

  domains : {
    all: require("./endpoints/domains").all,
    create: require("./endpoints/domains").create,
    byName: require("./endpoints/domains").byName,
    delete: require("./endpoints/domains").delete,
    allRecords: require("./endpoints/domains").allRecords,
    createRecord: require("./endpoints/domains").createRecord,
    recordByID: require("./endpoints/domains").recordByID,
    updateRecord: require("./endpoints/domains").updateRecord,
    deleteRecord: require("./endpoints/domains").deleteRecord
  },

  droplets : {
    create: require('./endpoints/droplets').create,
    createMultiple: require('./endpoints/droplets').createMultiple,
    byID: require('./endpoints/droplets').byID,
    all: require('./endpoints/droplets').all,
    byTag: require('./endpoints/droplets').byTag,
    kernels: require('./endpoints/droplets').kernels,
    snapshots: require('./endpoints/droplets').snapshots,
    backups: require('./endpoints/droplets').backups,
    allActions: require('./endpoints/droplets').allActions,
    delete: require('./endpoints/droplets').delete,
    deleteByTag: require('./endpoints/droplets').deleteByTag,
    neighbors: require('./endpoints/droplets').neighbors,
    allNeighbors: require('./endpoints/droplets').allNeighbors,
    
    enableBackups: require('./endpoints/droplet_actions').enableBackups,
    disableBackups: require('./endpoints/droplet_actions').disableBackups,
    reboot: require('./endpoints/droplet_actions').reboot,
    powerCycle: require('./endpoints/droplet_actions').powerCycle,
    shutdown: require('./endpoints/droplet_actions').shutdown,
    powerOFF: require('./endpoints/droplet_actions').powerOFF,
    powerON: require('./endpoints/droplet_actions').powerON,
    restore: require('./endpoints/droplet_actions').restore,
    passwordReset: require('./endpoints/droplet_actions').passwordReset,
    resize: require('./endpoints/droplet_actions').resize,
    rebuild: require('./endpoints/droplet_actions').rebuild,
    rename: require('./endpoints/droplet_actions').rename,
    changeKernels: require('./endpoints/droplet_actions').changeKernels,
    enableIPV6: require('./endpoints/droplet_actions').enableIPV6,
    enablePrivateNetwork: require('./endpoints/droplet_actions').enablePrivateNetwork,
    takeSnapshot: require('./endpoints/droplet_actions').takeSnapshot,
    actionByID: require('./endpoints/droplet_actions').actionByID,



  },

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
