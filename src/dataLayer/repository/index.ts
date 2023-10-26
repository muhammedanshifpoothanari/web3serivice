const { getAll: getAllRepo } = require('./commonRepo/getAll.repo');
const {getAllByFrom: getAllByFromRepo } = require('./commonRepo/getAllByFrom.repo');
const {getAllByGasUsed: getAllByGasUsedRepo } = require('./commonRepo/getAllByGasUsed.repo');
const {getAllByStatus: getAllByStatusRepo } = require('./commonRepo/getAllByStatus.repo');
const {getAllByTo: getAllByToRepo } = require('./commonRepo/getAllByTo.repo');
const {updateWallet: updateWalletRepo } = require('./userSpecificRepo/update.repo');
const { getById: getByIdRepo } = require('./commonRepo/getById.repo');
module.exports = {
    getAllRepo,
    getAllByFromRepo,
    getAllByGasUsedRepo,
    getAllByStatusRepo,
    getAllByToRepo,
    updateWalletRepo,
    getByIdRepo
}
