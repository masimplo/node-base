import * as express from "express";
var app = express();

app.get('/user', function(req: express.Request, res: express.Response){
  res.status(200).send({ name: 'tobi' });
});

export default app;