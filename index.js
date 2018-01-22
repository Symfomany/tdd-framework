'use strict';

module.exports.sinon = require("sinon");

module.exports.chai = require("chai");

module.exports.chai.use(require("sinon-chai"));

module.exports.chai.use(require("chai-datetime"));