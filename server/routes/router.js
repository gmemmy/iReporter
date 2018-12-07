import ControllerBase from "../controllers/controller"

const Controller = new ControllerBase()

const routes = (app) => {
 app.post('/api/v1/Redflags', Controller.addRedFlagRecord);
 app.get('/api/v1/Redflags', Controller.allRedFlagRecords);
 app.get('/api/v1/Redflags/:id', Controller.singleRedFlagRecord);
 app.patch('/api/v1/Redflags/:id/comment', Controller.changeComment);
 app.patch('/api/v1/Redflags/:id/location', Controller.editRecordlocation);
 app.delete('/api/v1/Redflags/:id/', Controller.deleteRecord);
 
 return app;
};

export default routes;