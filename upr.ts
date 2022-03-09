import express = require("express");
import {Application, Request, Response} from "express";
import {type} from "os";

const app: Application = express();
app.get("/movies", (req: Request, res: Response) => {
    const FILM: FILM[] = [{
        id: 1,
        title: "Thor",
        duration: 120,
        main_actor: "Stoyan Kolev"
    }]

    res.send(FILM);
});

type FILM = {
    id: number,
    title: string,
    duration: number,
    main_actor: string,
}

app.listen(8080,() => {
    console.log("Connected");

})