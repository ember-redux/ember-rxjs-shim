module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'rxjs', target: '5.3.1'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
