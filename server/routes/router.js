import ControllerBase from "../controllers/controller"

const Controller = new ControllerBase()

const routes = (app) => {
 app.get("/api/v1/Redflags", Controller.allRedFlagRecords);
 app.get("/api/v1/Redflags/:id", Controller.singleRedFlagRecord);
 app.patch("/api/v1/Redflags/:id/comment", Controller.changeComment);
 app.patch("/api/v1/Redflags/:id/location", Controller.changeLocation);
 

 return app
};

export default routes;