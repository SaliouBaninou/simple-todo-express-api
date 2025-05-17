import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

/**
 * Controller pour recup les todos
 * 
 * @param {Request} request 
 * @param {Response} response 
 */

export const getTodosController = async (request, response) => {
    try{
        const todos = await prisma.todos.findMany()
        if(todos.length === 0) return response.json({message: 'Aucune todo en base de donnée'})
        return response.status(200).json({message: "Todos trouvés !", todos})
    }catch(err){
        return response.json({message: `Erreur: ${err.message}`, error: true})
    }
}

/**
 * Controller pour recup une todo
 * 
 * @param {Request} request 
 * @param {Response} response 
 */
export  const getTodoController = async (request, response) => {
    try{
        const {id} = request.params
        const todos = await prisma.todos.findUnique({
            where: {id: parseInt(id)}
        })
        if(!todos) return response.json({message: 'Aucune todo en base de donnée'})
        return response.status(200).json({message: "Todos trouvés !", todos})
    }catch(err){
        return response.json({message: `Erreur: ${err.message}`, error: true})
    }
}

/**
 * Controller pour créé une todos
 * 
 * @param {Request} request 
 * @param {Response} response 
 */

export const createTodoController = async (request, response) => {
    try{
        const data = request.validatedData
        const newTodo  = await prisma.todos.create({
            data: data
        })
        return response.status(201).json({message: "Todo enreigistré !",todo: newTodo})
    }catch(err){
        return response.json({message: `Erreur: ${err.message}`, error: true})
    }
}

/**
 * Controller pour supprimer une todo
 * 
 * @param {Request} request 
 * @param {Response} response 
 */


export const deleteTodoController  = async (request, response) => {
    try{
        const id = parseInt(request.params.id)
        const todo  = await prisma.todos.delete({
            where: {id: id}
        })
        return response.status(201).json({message: "Todo Supprimé !",todo})
    }catch(err){
        return response.json({message: `Erreur: ${err.message}`, error: true})
    }
}

/**
 * Controller pour modifier une todos
 * 
 * @param {Request} request 
 * @param {Response} response 
 */

export const putTodoController = async (request, response) => {
    try{
        const id = parseInt(request.params.id)
        const data = request.validatedData
        const todo  = await prisma.todos.update({
            data: data,
            where: {id: id}
        })
        return response.status(201).json({message: "Todo modifié !",todo})
    }catch(err){
        return response.json({message: `Erreur: ${err.message}`, error: true})
    }
}