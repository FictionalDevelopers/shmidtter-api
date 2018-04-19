import express from 'express';
import { config as configEnv } from 'dotenv';

configEnv();

import routes from './routes';

const PORT = process.env.SERVER_PORT || 5001;
const app = express();

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
