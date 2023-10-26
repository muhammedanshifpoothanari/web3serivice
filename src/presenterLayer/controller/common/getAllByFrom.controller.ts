import { Request, Response } from 'express';
const { getAllByFromUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByFromCntrl = async (req: Request, res: Response) => {
  try {
    console.log('getAllByFromCntrl','hdhdhhdhd');
    const from: string =req.body.from 
    console.log(from,'at cntrl');
    
    const wallet = await wrappedFunction(from);
    console.log(wallet,'hdhdhhdhd');
    if (wallet) 
      return wallet;
  return false;
  
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByFromCntrl
};