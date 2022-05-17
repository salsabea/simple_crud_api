import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.routes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
