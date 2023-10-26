import { Request, Response } from 'express';
const { getAllByToUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByToCntrl = async (req: Request, res: Response) => {
  try {
    console.log('getAllByToCntrl','hdhdhhdhd');
    const to: string =req.body.to 
    console.log(to,'at cntrl');
    
    const wallet = await wrappedFunction(to);
    console.log(wallet,'hdhdhhdhd');
    if (wallet) 
      return wallet;
  return false;
  
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByToCntrl
};