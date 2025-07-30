import { Prisma, Role } from "@prisma/client";
import { prisma } from "../libs/prisma"

export const createUser = async({name , role,status,Post}:Prisma.UserCreateInput)=>{
    try {
        const user = await prisma.user.create({
        data:{
           name,
           role:role as Role,
           status,
           Post:Post
            
        }
        
    });
       return user;

    }catch(error){
        return false;
    }
       
}

export const createUsers = async(users:Prisma.UserCreateInput[])=>{
    return  await prisma.user.createMany({
        data: users,
        skipDuplicates:true
    });
}

export const getAllUsers = async()=>{
    const users = await prisma.user.findMany({
       skip:1,
       take:3
    });
    return users
}

export const getAllUserId = async(id:number)=>{
    const serachUser = await prisma.user.findUnique({
        where:{id},
        select:{
            name:true,
            status:true,
            
        }
    });

    return serachUser;
}

export const updateUserName =async()=>{
    const update = await prisma.user.updateMany({
     
        where:{
            id : 1
        },
     
        data:{
            name:'JoaovitorAlves'
        }
    });

    return update
}

export const deletUser = async()=>{
    const deleteUser = await prisma.user.delete({
        where:{
            id:1
        },
    })

    return deleteUser
       
}
