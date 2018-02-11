/**
 * Module dependencies.
 */

const _ = require('lodash');

/**
 * Expose module
 */
module.exports = XErrorFactory;

/**
 * XError factory.
 *
 * @param {String} type
 * @param {Object} defaults
 * @return {XError}
 * @api public
 */
function XErrorFactory(type, defaults) {
  if (typeof type !== 'string') {
    throw new Error('Invalid error type provided.');
  }

  if (/string|number/.test(typeof defaults)) {
    defaults = { code: defaults };
  }

  /**
   * X error constructor.
   *
   * @param {Mixed} message The error or the error message.
   * @param {Object} options
   * @api public
   */
  function XError(message, options) {

    if (/string|number/.test(typeof options)) {
      options = { code: options };
    }

    options = options || {};

    Error.call(this);
    Error.captureStackTrace(this, this.constructor);

    if (typeof message === 'object') {
      options.code = options.code || message.code;
      message = message.message;
    }

    this.name = type;
    this.constructor.name = type;
    this.message = message || '';
    this.timestamp = new Date();

    // We extend the this with defaults and options.
    _.chain(this).extend(defaults).extend(options).value();
  }

  /**
   * Inheriths from `Error`.
   */

  XError.prototype = Object.create(Error.prototype, {
    constructor: { value: XError }
  });

  return XError;
};
