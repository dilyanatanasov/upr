import express = require("express");
import {Application} from "express";
import {userRoutes} from "./routes/userRoutes";

const app: Application = express();

app.use("/", userRoutes);

app.listen(8080, () => {
    console.log("Connected")
})