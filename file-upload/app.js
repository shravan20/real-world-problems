import express from "express";
import morgan from  "morgan";
import bodyParser from "body-parser";
import assetRouter from "./src/api/assets/assets-router.js";
import path from 'path';
import connectToDb from './src/config/dbConfig.js';


const app = express();
const __dirname = path.resolve(path.dirname('')); 
const DB_URL = process.env.MONGODB_URL 

connectToDb(DB_URL);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, './src/uploads')))


app.use('/asset', assetRouter);

app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}`),
);