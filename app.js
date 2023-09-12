import express from 'express';
import 'dotenv/config';
import cors from'cors';
import bodyParser from 'body-parser';
import AppRouter from './src/get.router.js';

const app = express();

app.use(express);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(AppRouter);


const PORT =  3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});