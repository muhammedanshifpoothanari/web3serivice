const { updateUseCase : wrappedFunctionToUpdate } = require('../../../domainLayer/useCase/index');

const updateCntrl = async (data:any) => {
  try {

    console.log(data.from,'reached controller');
    console.log(JSON.parse(data),'dsekdcscd');
    const datas = JSON.parse(data)
    const {
      from,
      to,
      gasUsed,
      status
    } = datas

    
    const newData = {
      from,
      to,
      gasUsed,
      status
    }

    console.log(newData,'newData controller');
    const isUpdated = await wrappedFunctionToUpdate(newData);

    if (isUpdated)       
      return isUpdated;
  return false;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    updateCntrl
};