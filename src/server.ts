require("dotenv").config();

const express = require("express");
// const cors = require("cors");

import userRoutes from "./Routes/User/UserRoutes";

const app = express();

app.use(express.json());

// app.use(cors({
//     origin: process.env.URL
// }));

app.use("/api/v1", userRoutes);

app.listen(process.env.PORT, () => {
    console.log("Listening PORT: " + process.env.PORT);
})
