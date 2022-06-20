

import express from "express";
import fs from 'fs';
import path from 'path'
import { cwd } from "process";
const router = express.Router()
/**
 * @description middleware that rename all memes files in memes directory
 */
export default router.use((req,res,next)=>{
    try {
        fs.readdirSync('./memes/').forEach((file)=>{
            if(file.endsWith('.jfif')){
                let newname = file.slice(0,-5)+'.jpeg'
                fs.rename(path.resolve(cwd(),'memes',file),path.resolve(cwd(),'memes',newname),(err)=>{
                    if(err){
                        console.error(err)
                    }
                })
            }
        })
        console.log('\x1b[33m%s\x1b[0m', 'All \'.jfif\' files up to date')
        next()
    } catch (error) {
        console.log(path.resolve(cwd(),'memes'))
        console.error(error)
        res.send(error).status(500)
    }
})