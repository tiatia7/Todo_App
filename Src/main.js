import express from "express"; 
import todoTaskRouter from "./Router/todos.js"; // to import the router I created in the todos.js file to use it in the app
import dotenv from "dotenv";

dotenv.config();

const app = express(); // creat an express app
const port = 3000; 

app.use(express.json()); // to parse json  bodies or (req.body = undefined) 
app.use("./Router/todos.j", todoTaskRouter);// to use the router i creqted in the todos.js file and make it available for the app to use it when I send reqs to the server 

app.listen(port, () => 
    { console.log(`Ava! the server is running on http://localhost:${port}`) }
); // run the server to make it ready for rec reqs







