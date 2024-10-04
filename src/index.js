import express, { request, response } from "express";
import routes from "./routes.js";

const server = express();

server.use(express.json());

server.use("/", routes);

server.listen(3334, ()=>{
    console.log("Meu servidor está rodando! 🛸");
});




