import { Request, Response } from 'express';
const { getByIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getByIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getByIdCntrl,'hdhdhhdhd');
    const id: string =req.params.id 
    const Trucks = await wrappedFunction(id);
    console.log(Trucks,'hdhdhhdhd');
    if (Trucks) 
      return Trucks;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
 getByIdCntrl
};