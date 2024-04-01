    const express =require('express');
    const ( Pool )=require('pg');
    const app=express();
    const pool=new pool({
        user:'postgres',
        host:'localhost',
        database:'todos',
        password:'root',
        port:5432,

    });
    app.use(express.json());
