import express from "express";
const router = express.Router()
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default router.get('/',(req,res)=>{
    res.send('oi')
}).get('/delete',async(req,res)=>{
    await prisma.memes.deleteMany()
    res.send('deletou')
})