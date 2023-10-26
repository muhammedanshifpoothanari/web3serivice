const { getAllByToRepo: getAllByToRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByToRepoWrapper  = require('../utility');
type functionTypeToGetAllByWallet = (...args: any[]) => Promise<any>;
const getAllByToExecute: functionTypeToGetAllByWallet = async (dependency: typeof getAllByToRepository,to: string) => {
  console.log('getAllByToUseCase:', );
  console.log('dependency:', dependency);
  const walletData = await dependency(to);

  if (walletData === null) {
    return false
  }

  return walletData;
};

module.exports = getAllByToRepoWrapper(getAllByToRepository, getAllByToExecute)

