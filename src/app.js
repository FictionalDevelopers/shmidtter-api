import express from 'express';
import morgan from 'morgan';

import { SERVER_PORT } from './consts/db';
import routes from './routes';
const PORT = SERVER_PORT || 5001;
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
