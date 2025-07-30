import express from 'express';
import helmet from 'helmet';
import { routerMain } from './routers/main';


const server = express();

server.use(express.json());
server.use(helmet());
server.use(express.urlencoded({extended:true}));
server.use(routerMain);

server.get('/ping',(req ,res)=>{
    res.json({pong:true})
})

server.listen(process.env.PORT,()=>{
    console.log(`Servidor rodando: http://localhost:${process.env.PORT}`);
})


