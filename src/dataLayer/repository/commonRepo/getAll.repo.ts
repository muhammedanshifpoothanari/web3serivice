const { getWalletModel } = require('../getWalletModel');

const getAll = async () => {
    const walletModel = getWalletModel();
    try {
        console.log('getAllRepo');
        
        const walletArray = await walletModel.find().exec();
        
        if (walletArray.length === 0 || !walletArray )
            return false;
        return walletArray;
    } catch (error) {
        throw new Error('Error in getting wallet from the database!');
    }
};

module.exports = {
    getAll
}
