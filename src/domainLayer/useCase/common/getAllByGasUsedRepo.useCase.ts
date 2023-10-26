const { getAllByGasUsedRepo: getAllByGasUsedRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByGasUsedRepoWrapper  = require('../utility');
type functionTogetAllByGasUsedRepo = (...args: any[]) => Promise<any>;
const getAllByGasUsedExecute: functionTogetAllByGasUsedRepo = async (dependency: typeof getAllByGasUsedRepository, gasUsed: number) => {
  console.log('getAllByGasUsedRepository:', );
  console.log('dependency:', dependency);
  const walletData = await dependency(gasUsed);

  if (walletData === null) {
   return false
  }

  return walletData;
};

module.exports = getAllByGasUsedRepoWrapper(getAllByGasUsedRepository, getAllByGasUsedExecute)
