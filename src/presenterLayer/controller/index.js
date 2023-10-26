"use strict";
const { updateCntrl: updateController } = require('./userSpecific/update.controller');
const { getAllCntrl: getAllController } = require('./common/getAll.controller');
const { getAllByFromCntrl: getAllByFromController } = require('./common/getAllByFrom.controller');
const { getAllByToCntrl: getAllByToController } = require('./common/getAllByTo.controller');
const { getAllByGasUsedCntrl: getAllByGasUsedController } = require('./common/getAllByGasUsed.controller');
const { getAllByStatusCntrl: getAllByStatusController } = require('./common/getAllByStatus.controller');
const { getByIdCntrl: getByIdController } = require('./common/getById.controller');
module.exports = {
    updateController,
    getAllController,
    getAllByFromController,
    getAllByToController,
    getAllByGasUsedController,
    getAllByStatusController,
    getByIdController,
};
