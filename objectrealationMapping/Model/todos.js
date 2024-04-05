const {DataTypes}=require('sequelize');
const sequelize=require('../Sequelize');
const Todos=sequelize.define('todos',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    completed:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
},
   {
    tableName:'todos',//Match the table name in the existing database
    timestamps:false

   
});
module.exports=Todos;;