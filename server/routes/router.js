import Controller from "../controllers/controller"

const routes = (app) => {
 app.post('/api/v1/red-flags', Controller.addRedFlagRecord);
 app.get('/api/v1/red-flags', Controller.allRedFlagRecords);
 app.get('/api/v1/red-flags/:id', Controller.singleRedFlagRecord);
 app.patch('/api/v1/red-flags/:id/comment', Controller.changeComment);
 app.patch('/api/v1/red-flags/:id/location', Controller.editRecordLocation);
 app.delete('/api/v1/red-flags/:id/', Controller.deleteRecord);
};

export default routes;