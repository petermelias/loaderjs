const Log = require('log');

const logger = new Log('info');

const ivmsg = (msg) => `[Loader]: ${ msg }`;

Object.assign(exports, {
  default: logger,
  ivmsg
});
