/* eslint-env node */
'use strict';

const mergeTrees = require('broccoli-merge-trees');
const path = require('path');
const typescript = require('broccoli-typescript-compiler').typescript;

module.exports = {
  name: 'rxjs',
  treeForAddon (tree) {
    const rxPath = path.dirname(require.resolve('rxjs/'));
    const rxTree = this.treeGenerator(rxPath);

    const theTree = typescript(rxTree, {
      tsconfig: {
        compilerOptions: {
          module: "es2015",
          target: "es6",
          moduleResolution: "node",
          rootDir: "src",
          outDir: "dist",
          sourceMap: true,
          declaration: true
        },
        files: [
          "src/**/*.ts"
        ]
      }
    });

    if (!tree) {
      return this._super.treeForAddon.call(this, theTree);
    }

    const trees = mergeTrees([rxTree, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
}
