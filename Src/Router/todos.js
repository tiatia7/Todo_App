import express from "express";
import {
  getTodos, addTodos, deleteTodos, updateTodos
}  from "../Controller/todos-controller.js";

const router = express.Router();

//get  
  router.get('/', getTodos)
//post 
  router.post("/", addTodos);
//delet
  router.delete('/:id', deleteTodos);
//put
  router.put('/:id', updateTodos);


export default router;     

