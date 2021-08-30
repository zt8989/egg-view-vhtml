'use strict';

module.exports = app => {
  app.view.use('vhtml', require('./lib/view'));
};
