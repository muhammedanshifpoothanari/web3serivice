import { Router, Request, Response, NextFunction } from 'express';

const {getAllController: getAll } = require('../../controller/index');
const {getAllByFromController: getAllByFrom } = require('../../controller/index');
const {getAllByGasUsedController: getAllByGasUsed } = require('../../controller/index');
const {getAllByStatusController: getAllByStatus} = require('../../controller/index');
const {getAllByToController: getAllByTo} = require('../../controller/index');
const {getByIdController: getById} = require('../../controller/index');

const {updateController: updateWallet} = require('../../controller/index');

const userRouters = Router();

interface RouteHandler {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

const asyncErrorHandler = (fn: RouteHandler) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result: any = await fn(req, res,next );
    if (!result) {
      return res.status(404).json({ error: 'Data not found!' });
    }
    res.status(200).json({ message: 'Success', data: result });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing the request. Please try again later.' });
  }
};

const routes = [
  { path: '/wallet', method: 'GET', fn: getAll },
  { path: '/wallet/byFrom', method: 'POST', fn: getAllByFrom },
  { path: '/wallet/byTo', method: 'POST', fn: getAllByTo },
  { path: '/wallet/byGasUsed', method: 'POST', fn: getAllByGasUsed },
  { path: '/wallet/byStatus', method: 'POST', fn: getAllByStatus },
  { path: '/wallet/:id', method: 'GET', fn: getById },
  { path: '/wallet/update', method: 'POST', fn: updateWallet },
  ];
  

for (const route of routes) {
  const { path, fn } = route;
  const routeHandler = asyncErrorHandler(fn);

  if (route.method === 'GET') {
    userRouters.get(path, routeHandler);
  } else if (route.method === 'POST') {
    userRouters.post(path, routeHandler);
  } else if (route.method === 'DELETE') {
    userRouters.delete(path, routeHandler);
  } else if (route.method === 'PATCH') {
    userRouters.patch(path, routeHandler);
  } else if (route.method === 'PUT') {
    userRouters.put(path, routeHandler);
  }
}

module.exports = userRouters
