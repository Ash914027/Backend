//CONNECT POSTGRESQL to nodejs
const express=require('express');
const { Pool } = require('pg');
const app=express();
const port=3000;
// Create a new pool instance
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ashish',
    password: 'root',
    port: 5432, // default PostgreSQL port
});
app.use(express.json());
app.get('/todos',(req,res)=>{
    pool.query('SELECT * FROM todos',(error,result)=>{
        if(error){
            console.error('error fetching todos',error);
            res.status(500).json({error:'internal server error'});
        }else{
        res.status(500).json(result.rows);
        }
    });
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
//post a new todo
app.post('/todos',(req,res)=>{
    const {title,completed}=req.body;
    pool.query('INSERT INTO todos(title,completed) VALUES($1,$2)',[title,completed],(error)=>{
        if(error){
            console.error('error inserting todo',error);
            res.status(500).json({error:'internal server error'});
        }else{
            res.status(201).json({message:'todo created successfully'});
        }
    });
});
//put update a todo
app.put('/todos/:id',(req,res)=>{
    const {id}=req.params;
    const {title,completed}=req.body;
        pool.query('UPDATE todos SET title=$1,completed=$2 WHERE id=$3',[title,completed,id],(error)=>{
            if(error){
                console.error('error updating todo',error);
                res.status(500).json({error:'internal server error'});
            }else{
                res.status(200).json({message:'todo updated successfully'});
            }
        });
    } );// Add this closing parenthesis and brace
app.delete('/todos/:id',(req,res)=>{
    const {id}=req.params;
    pool.query('DELETE FROM todos WHERE id=$1',[id],(error)=>{
        if(error){
            console.error('error deleting todo',error);
            res.status(500).json({error:'internal server error'});
        }else{
            res.status(200).json({message:'todo deleted successfully'});
        }
    });
});
