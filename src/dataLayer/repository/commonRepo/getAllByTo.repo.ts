const { getWalletModel : modelToGetWalletByTo } = require('../getWalletModel')
const getAllByTo = async (to: number) => {
    if (!to)
        throw new Error('to was not properly passed to the repository!');

    const walletModel = modelToGetWalletByTo();
    try {
        const walletArray = await walletModel.find({ to: to }).exec();
        if (!walletArray || walletArray.length === 0)
            return false;
        
        return walletArray;
    } catch (error) {
        throw new Error('Error in getting wallet from the database by wallet startingpoint!');
    }
};

module.exports = {
    getAllByTo
}