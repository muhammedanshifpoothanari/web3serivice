const { getAllByFromRepo: getAllByFromRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByFromWrapper  = require('../utility');
type functionTogetAllByFromRepo = (...args: any[]) => Promise<any>;
const getAllByfromExecute: functionTogetAllByFromRepo = async (dependency: typeof getAllByFromRepository, from: string) => {
  console.log('getAllByFromRepository:', );
  console.log('dependency:', dependency);
  console.log(from,'from');
  
  const walletData = await dependency(from);

  if (walletData === null) {
   return false
  }

  return walletData;
};

module.exports = getAllByFromWrapper(getAllByFromRepository, getAllByfromExecute)
