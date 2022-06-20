import { PrismaClient } from "@prisma/client";
import express from "express";

const router = express.Router()

const prisma = new PrismaClient();

/**
 * @description middleware that test the connection with database
 */
export default router.use((req,res,next)=>{
    (async function(){
        try {
            await prisma.$connect()
            console.log('\x1b[33m%s\x1b[0m', 'Connection has been established successfully.')
            next()
        } catch (error) {
            console.error(error)
            res.send(error).status(500)
        }
    })();
})