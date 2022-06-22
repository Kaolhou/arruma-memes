import express from "express";
const router = express.Router()
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default router.get('/',(req,res)=>{
    res.send('oi')
}).get('/delete',async(req,res)=>{
    console.log(`${(await prisma.memes.deleteMany()).count} rows affected (delete)`)
    res.send('deletou')
})