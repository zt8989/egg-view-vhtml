'use strict';

const vhtml = require('express-vhtml-views');

module.exports = class VhtmlView {
  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
    this.config = ctx.app.config.vhtml;
    this.renderFile = vhtml.createEngine(this.config);
  }

  async render(filename, locals) {
    const options = Object.assign({}, locals, {
      settings: { views: this.app.config.view.root[0] },
    });
    return new Promise((resolve, reject) => {
      this.renderFile(filename, options, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  async renderString() {
    throw new Error('not implemented yet!');
  }
};
