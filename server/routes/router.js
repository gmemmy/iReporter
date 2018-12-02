import Controller from "../controllers/controller"

const routes = (app) => {
 app.post('/api/v1/Red flags', Controller.addRedFlagRecord);
 app.get('/api/v1/Red flags', Controller.allRedFlagRecords);
 app.get('/api/v1/Red flags/:id', Controller.singleRedFlagRecord);
 app.patch('/api/v1/Red flags/:id/comment', Controller.changeComment);
 app.patch('/api/v1/Red flags/:id/location', Controller.editRecordLocation);
 app.delete('/api/v1/Red flags/:id/', Controller.deleteRecord);
};

export default routes;