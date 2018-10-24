import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import {routes} from './routes';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const router = express.Router();
const api = routes(router);
app.use('/', api);

const PORT = parseInt(process.env.PORT as string) || 3000;
app.listen(PORT);
console.log(`codeyql server listening on port ${PORT}`);
