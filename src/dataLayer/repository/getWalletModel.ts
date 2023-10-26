import mongoose, { Model } from 'mongoose';


interface WalletDocument extends Document {
  from: String;
  to: String;
  status: String;
  gasUsed: Number;
}



const getWalletModel = (): Model<WalletDocument> => {
    const entityName = 'walletInfo';
    const { walletSchema } = require('../database/schema/walletInfo.schema');
    console.log('jhdhkjdxcfjkcfv');
    if (!walletSchema)
        throw new Error('wallet schema not found!');
    
    return mongoose.model<WalletDocument>(entityName, walletSchema);
};
module.exports = {
    getWalletModel
}