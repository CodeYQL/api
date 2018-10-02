const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { routes } = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const router = express.Router();
const api = routes(router);
app.use('/api', api);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`codeyql server listening on port ${PORT}`);