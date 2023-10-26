const { getAllByStatusRepo: getAllByStatusRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByStatusWrapper  = require('../utility');
type functionTypeToGetAllByStatus = (...args: any[]) => Promise<any>;
const getAllByStatusExecute: functionTypeToGetAllByStatus = async (dependency: typeof getAllByStatusRepository,status: string) => {
  console.log('getAllByStatusUseCase:', );
  console.log('dependency:', dependency);
  const walletData = await dependency(status);

  if (walletData === null) {
    return false
  }

  return walletData;
};

module.exports = getAllByStatusWrapper(getAllByStatusRepository, getAllByStatusExecute)

