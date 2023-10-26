import { Request, Response } from 'express';
const { getAllByGasUsedUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByGasUsedCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByGasUsedCntrl,'hdhdhhdhd');
    const gasUsed: string =req.params.gasUsed 
    const wallet = await wrappedFunction(gasUsed);
    console.log(wallet,'hdhdhhdhd');
    if (wallet) 
      return wallet;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
 getAllByGasUsedCntrl
};