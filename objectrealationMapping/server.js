const express=require('express'); 
//importing express module
const sequelize=require('./Sequelize');//importing sequelize module
const todos=require('./Model/Todos');
const app=express();
const PORT=3000;
//test the database connection
sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
    return sequelize.sync({alter:true});
}).then(()=>{
    console.log('All models were synchronized successfully.');
}).catch(err=>{
    console.log('Unable to sync the models',err);
});
app.use(express.json());
//Define endpoints
app.get('/todos',(req,res)=>{
    todos.findAll().then((todos)=>{
        res.json(todos);
    }).catch(err=>{
        res.status(500).json({error:'Internal Server error'});
    });
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
app.post('/todos',(req,res)=>{
    const {title,completed}=req.body;
    todos.create({title,completed})
       .then((todo)=>{
        res.json(todo);
    }).catch(()=>{
        res.status(500).json({error:'Bad Request'});
    });
});
app.put('/todos/:id',(req,res)=>{
    const {id}=req.params;
    const {title,completed}=req.body;
    todo.findByPk(todoId).then((todo)=>{
        if(!todo){
            return res.status(404).json({error:'Todo not found'});
        }
        updateTodo(id,title,completed,res);
    }).catch(()=>{
        res.status(500).json({error:'Bad Request'});
    });
    //update todo
    todos.title=title;
    todos.completed=completed; 
    //save the update  todo
     return todos.save();
    
    })
    .then((updateTodo)=>{
        res.json(todo);
    }).catch((error)=>{
        res.status(500).json({error:'Bad Request'});
    
});