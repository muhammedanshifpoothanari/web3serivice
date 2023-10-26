const { getWalletModel : modelToGetById } = require('../getWalletModel')
const getById = async (id: string) => {
    if (!id)
        throw new Error(' id was not properly passed to the repository!');

    const walletModel = modelToGetById();
    try {
        const Array = await walletModel.findById(id).exec();

        if (!Array || Array.length === 0)
            return false;
        
        return Array;
    } catch (error) {
        throw new Error('Error in getting  from the database by wallet id!');
    }
};

module.exports = {
    getById
}