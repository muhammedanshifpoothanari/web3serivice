const { getWalletModel : modelToGetByStatus } = require('../getWalletModel')
const getAllByStatus = async (Status: string) => {
    if (!Status)
        throw new Error('Status was not properly passed to the repository!');

    const walletModel = modelToGetByStatus();
    try {
        const walletArray = await walletModel.find({ status: Status }).exec();
        if (!walletArray || walletArray.length === 0)
            return false;
        
        return walletArray;
    } catch (error) {
        throw new Error('Error in getting wallet from the database by wallet Status!');
    }
};

module.exports = {
    getAllByStatus
}