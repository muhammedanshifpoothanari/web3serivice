const { updateWalletRepo: updateWalletRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const  updateWrapperToUpdateWalletRepo  = require('../utility');
type functionToUpdateTruck = (...args: any[]) => Promise<any>;
type dataAtupdateTruckUseCase =  {
  from: string,
  to: string,
  status: string,
  gasUsed: number,
};
const updateTruckExecute: functionToUpdateTruck = async (dependency: typeof updateWrapperToUpdateWalletRepo,data: dataAtupdateTruckUseCase) => {
  console.log('updateWalletRepository:', );
  console.log('dependency:', dependency);

  console.log(data,'at usecase');
  
  const walletData = await dependency( data);

  if (walletData === null) {
   return false
  }

  return walletData;
};

module.exports = updateWrapperToUpdateWalletRepo(updateWalletRepository, updateTruckExecute)
