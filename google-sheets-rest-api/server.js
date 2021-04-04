import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./src/api/UserMgmt/router.js";

const PORT = process.env.PORT || 3030 ;
const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());

app.use('/api', router);

app.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}`);
});