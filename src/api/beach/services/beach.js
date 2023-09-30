'use strict';

/**
 * beach service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::beach.beach');
