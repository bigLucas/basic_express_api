import express from 'express';
import PetController from './api/controllers/PetController';

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
    res.send(`Hi, we have just one route yet. Please call localhost:${port}/pets in URL bar`);
});

app.use('/pets', PetController);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

