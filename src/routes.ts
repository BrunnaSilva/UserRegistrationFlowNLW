import { Router } from 'express'
import { UserController } from "./controllers/UserController"

const router = Router()
const  userController = new UserController()

router.post("/users", userController.create)

export { router }

/**
 * GET => Busca;
 * POST => Salvar;
 * PUT => Alterar;
 * DELETE => Deletar;
 * PATCH => Alteração especifica
 * 
 * request => tudo aquilo que recebemos 
 * response => tudo aquilo que enviamos 
 */

 //http://localhost:3333/users

 
/*
// 1º param => Rota (Recurso API)
// 2º param => request, response 
app.post("/", (request, response)=> {
    //Recebeu dados para salvar 
    return response.json({message: "Dados salvos com sucesso"})
})*/