import * as express from 'express';
import {join} from 'path';

const app = express();

app.use(express.static(join(__dirname, '../execmd')));

app.get('/notes', (req, res) => {
  if (!req.query.cmd) {
    return res.send({
      error: 'A cmd has to be provided',
    });
  }

  if (!req.query.args) {
    return res.send({
      error: 'Args has to be provided',
    });
  }

  console.log(req.query);

  res.send({
    notes: [
      {
        cmd: `${req.query.cmd}`,
        args: `${req.query.args}`,
      }
    ]
  });
});

app.get("*", function (_, res) {
  res.send("Error_page 404");   
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
