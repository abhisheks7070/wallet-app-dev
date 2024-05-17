
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

// const corsOptions = {
//     // origin: "http://localhost:5173" // frontend URI (ReactJS)
//     origin: "https://payment-app-frontend.onrender.com" // frontend URI (ReactJS)
// }

app.use(cors());
// app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000);