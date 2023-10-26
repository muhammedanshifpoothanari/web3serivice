const { getByIdRepo: getByIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getByIdWrapper  = require('../utility');
type functionTogetByIdRepo = (...args: any[]) => Promise<any>;
const getByIdExecute: functionTogetByIdRepo = async (dependency: typeof getByIdRepository, id: string) => {
  console.log('getByIdRepository:', );
  console.log('dependency:', dependency);
  const walletData = await dependency(id);

  if (walletData === null) {
   return false
  }

  return walletData;
};

module.exports = getByIdWrapper(getByIdRepository, getByIdExecute)

