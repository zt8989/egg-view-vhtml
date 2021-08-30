'use strict';

const mm = require('egg-mock');

describe('test/egg-view-vhtml.test.js', () => {
  describe('render', () => {
    let app;
    before(() => {
      app = mm.app({
        baseDir: 'apps/vhtml-view',
      });
      return app.ready();
    });
    after(() => app.close());

    it('should render with locals', () => {
      return app
        .httpRequest()
        .get('/index')
        .expect('<!DOCTYPE html><div title="hello">hello world</div>')
        .expect(200);
    });
  });
});
