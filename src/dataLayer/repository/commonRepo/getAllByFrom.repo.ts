const { getWalletModel : modelToGetWalletByFrom } = require('../getWalletModel')
const getAllByFrom = async (from: string) => {
    if (!from)
        throw new Error('from was not properly passed to the repository!');

    const walletModel = modelToGetWalletByFrom();
    try {
        const walletArray = await walletModel.find({ from: from }).exec();
        if (!walletArray || walletArray.length === 0)
            return false;

        return walletArray;
    } catch (error) {
        throw new Error('Error in getting wallet from the database by wallet From!');
    }
};

module.exports = {
    getAllByFrom
}