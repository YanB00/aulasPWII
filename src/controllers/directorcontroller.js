import express, { request, response } from "express";
import service from "../services/directorServices.js";

const route = express.Router();

route.get("/", async (request, response)=>{
    return response.status(200).send({"message":"Diretores Ativos"})
});

route.post("/", async(request,response)=>{
    const {name_director,nacionality,birthday,sex} = request.body;
    return response.status(200).send({"message":"Diretor criado com sucesso"})

await service.createDirector(name_director,nacionality,birthday,sex)

});

export default route;