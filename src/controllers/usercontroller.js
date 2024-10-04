import express, { request, response } from "express";
import service from "../services/userServices.js"


const route = express.Router();

route.get("/", async (request, response)=>{
    return response.status(200).send({"message":"Listagem de usuários realizada com sucesso!"})

});

route.post ("/", async (request, response)=>{
    const {name,email,password, typeUser} = request.body;

    if(password.length <=5){
        return response.status(400).send({"message": "A senha deve conter no minino 6 caracteres."})
    }

    if(typeUser.toUpperCase() !="Administrador".toUpperCase() && typeUser.toUpperCase() !="Comum".toUpperCase()){
        return response.status(400).send({"message": "Tipo de usuário não reconhecido."})
    }

await service.createUser(name,email,password,typeUser);

return response.status(201).send({"message":"Usuário cadastrado com sucesso"})
});

route.put("/:idUser", async (request, response)=> {
    const {name,email,password, typeUser} = request.body;
    const {idUser} = request.params;

    if(password.length <=5){
        return response.status(400).send({"message": "A senha deve conter no minino 6 caracteres."})
    }

    if(typeUser.toUpperCase() !="Administrador".toUpperCase() && typeUser.toUpperCase() !="Comum".toUpperCase()){
        return response.status(400).send({"message": "Tipo de usuário não reconhecido."})
    }

    await service.updateUser(name,email,password,typeUser, idUser);

    return response.status(200).send({"message":"Dados atualizados com sucesso"});
    
});


export default route;