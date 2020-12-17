import express from "express";
import morgan from  "morgan";
import bodyParser from "body-parser";
import assetRouter from "./src/api/assets/assets-router.js";
import path from 'path';

const app = express();
const __dirname = path.resolve(path.dirname('')); 

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, './src/uploads')))


app.use('/asset', assetRouter);

app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}`),
);