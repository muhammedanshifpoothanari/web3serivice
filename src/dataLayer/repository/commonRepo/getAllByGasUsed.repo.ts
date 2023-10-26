const { getWalletModel : modelToGetWalletByGasUsed } = require('../getWalletModel')
const getAllByGasUsed = async (GasUsed: string) => {
    if (!GasUsed)
        throw new Error(' GasUsed was not properly passed to the repository!');

    const walletModel = modelToGetWalletByGasUsed();
    try {
        const walletArray = await walletModel.find({ gasUsed: GasUsed }).exec();
        if (!walletArray || walletArray.length === 0)
            return false;
        
        return walletArray;
    } catch (error) {
        throw new Error('Error in getting wallet from the database by wallet GasUsed!');
    }
};

module.exports = {
    getAllByGasUsed
}