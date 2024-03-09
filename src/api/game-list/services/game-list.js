'use strict';

/**
 * game-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game-list.game-list');
