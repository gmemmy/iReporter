import express from "express";
import bodyParser from "body-parser";
import routes from './routes/router';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


routes(app).listen(port, () => {
  console.log(`server is listening on port ${port}!`)
})




export default app;