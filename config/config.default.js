'use strict';

/**
 * egg-view-vhtml default config
 * @member Config#vhtml
 * @property {String} doctype - any string that can be used as a doctype, this will be prepended to your document
 * @property {Boolean} beautify - beautify markup before outputting (note, this can affect rendering due to additional whitespace)
 * @property {Boolean} transformViews - use babel to apply JSX, ESNext transforms to views.
 * @property {*} babel - any object containing valid Babel options
 */
exports.vhtml = {
  doctype: '<!DOCTYPE html>',
  beautify: false,
  transformViews: true,
};
