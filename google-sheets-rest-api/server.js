import express from "express";
import morgan from "morgan";
import cors from "cors";

const PORT = 3030 | process.env.PORT;
const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());


app.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}`);
});