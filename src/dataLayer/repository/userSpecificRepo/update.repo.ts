const { getWalletModel: modelToUpdateWallet } = require('../getWalletModel');

 type walletDataToUpdate = {
  from: string,
  to: string,
  status: string,
  gasUsed: number
 }


const updateWallet = async ( updatedWalletData: walletDataToUpdate) => {
  console.log(updatedWalletData,'jhjgvfreer');
  
  if (!updatedWalletData) {
    throw new Error('updated user data must be provided!');
  }

  const walletModel = modelToUpdateWallet();

  try {
  
    const newWallet = new walletModel({
      ...updatedWalletData,
      createdAt : new Date(),
  });

  // Save the new truck to the database
  const doneTheJob = await newWallet.save();
  if(!doneTheJob)
  return false;
  // Return the newly created truck
  return true;
  } catch (error) {
    throw new Error(`Error in updating the wallet in the database: ${error}`);
  }
};

module.exports = {
  updateWallet,
};
