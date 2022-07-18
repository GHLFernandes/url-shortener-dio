import express from 'express';
import { URLController } from './controller/URLController';
import { MongoConnection } from './database/MongoConnection';

const app = express() ;
app.use(express.json());

const database = new MongoConnection();
database.connect();

const PORT = 5000;
const urlController = new URLController();

app.post('/shorten', urlController.shorten);
app.get('/:hash', urlController.redirect);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});