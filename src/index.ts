import express from 'express';
import { URLController } from './controller/URLController';

const app = express() ;
app.use(express.json());

const PORT = 5000;
const urlController = new URLController();

app.post('/shorten', urlController.shorten);
app.get('/:hash', urlController.redirect);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});