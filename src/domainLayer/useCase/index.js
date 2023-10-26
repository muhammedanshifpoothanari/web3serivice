"use strict";
const getAllUseCase = require('./common/getAll.useCase');
const getAllByFromUseCase = require('./common/getAllByFrom.useCase');
const getAllByGasUsedUseCase = require('./common/getAllByGasUsedRepo.useCase');
const getAllByStatusUseCase = require('./common/getAllByStatus.useCase');
const getAllByToUseCase = require('./common/getAllByTo.useCase');
const getByIdUseCase = require('./common/getById.useCase');
const updateUseCase = require('./userSpecific/update.useCase');
module.exports = {
    getAllUseCase,
    getAllByFromUseCase,
    getAllByGasUsedUseCase,
    getAllByStatusUseCase,
    getAllByToUseCase,
    getByIdUseCase,
    updateUseCase,
};
