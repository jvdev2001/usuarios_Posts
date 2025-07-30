import { Router } from "express";
import { createUser, createUsers, getAllUserId, getAllUsers, updateUserName } from "../services/users";

export const routerMain = Router();


routerMain.get('/',(req,res)=>{
    res.json({pong:true})
})

routerMain.post('/user', async(req,res)=>{
   
    const user = await createUser({
        name:'Adriano',
        role:'USER',
        status: true,
        Post:{
            create:{
                title:'QUEM EU SOU',
                subTitle:'ola bom dia me chamo Adriano sou pro player'
            }
        }
    }
        
    );
    if(user){
         res.status(201).json({user})
    }else{
        res.status(500).json({error:'Email ja cadastrado'})
    }
   

})

routerMain.post('/users', async(req,res)=>{
    const result = await createUsers([
        {name:'joaoalves',role:'ADMIN',status:true},
        {name:'Sivala',role:'USER',status:true},
    ]);
    res.json({result})
})


routerMain.get('/users',async(req,res)=>{
    const result = await getAllUsers();
    res.json({result})
})

routerMain.get('/user',async(req,res)=>{
    const result = await getAllUserId(4);
    res.json({result})
})

routerMain.put('/user',async (req,res)=>{
    const result = await updateUserName();
    res.json({result})
})