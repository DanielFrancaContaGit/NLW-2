import express, { Router } from 'express';
import ClassesController from './controller/ClassesController';
import ConnectionsController from './controller/ConnectionController';


const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.route('/classes')
  .post(classesController.create)
  .get(classesController.index);

routes.route('/connections')
  .post(connectionsController.create)
  .get(connectionsController.index)

export default routes;

