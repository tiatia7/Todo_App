import myPg from "pg";
import dotenv from "dotenv";
dotenv.config();// to load env var from .env file to process.env

const {Pool} = myPg; // create a pool of DB connections for efficiency and better performance

const pool = new Pool(
    {
    user: process.env.DB_USER,

    host: process.env.DB_HOST,

    database: process.env.DB_NAME,

    password: process.env.DB_PASSWORD,

    port: process.env.DB_PORT
    });// to connect to the db using the env var  

    pool.query("SELECT NOW()",(err, res)=> {
        if(err){
            console.log("Database connection error:", err)
        } else {
            console.log("Database connection successful!:")
        }
    });// testing the connection to the db by executing a simple query 

export default pool;
// to link node.js to database