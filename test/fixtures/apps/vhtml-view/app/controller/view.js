'use strict';

exports.index = function* (ctx) {
  yield ctx.render('index.jsx', {
    data: 'world',
    title: 'hello',
  });
};
