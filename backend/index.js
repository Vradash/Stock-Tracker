//import works only when package.json has "type": "module"
import express from 'express';
import itemRoute from './routes/itemRoute.js';
import recommendRoute from './routes/recommend.js';
import cors from 'cors';

const app = express();
app.use(express.json())//used to to send json data to server
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/items', itemRoute);
app.use('/api/recommend', recommendRoute);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});