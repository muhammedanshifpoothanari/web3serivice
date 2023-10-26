import { Request, Response } from 'express';
const { getAllByStatusUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByStatusCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByStatusCntrl,'hdhdhhdhd');
    const status: string =req.body.status
    const wallet = await wrappedFunction(status);
    console.log(wallet,'hdhdhhdhd');
    if (wallet) 
      return wallet
  return false
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByStatusCntrl
};