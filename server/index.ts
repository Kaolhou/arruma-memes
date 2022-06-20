import express from "express";
import path from "path";
import { find } from "./utils/find";
const app = express();

//static path
app.use('/static', express.static('memes'));

//import and run all scripts from middleware folder 
(async function(){
    const files = find(path.resolve(process.cwd(),'middleware'),'.ts');

    (await Promise.all(
        files.map(async(file)=>
            (await import(file)).default)))
    .forEach((i)=>{
        app.use(i)
    })
})();

//import and run all scripts from paths folder 
(async function(){
    const files = find(path.resolve(process.cwd(),'paths'),'.ts');

    (await Promise.all(
        files.map(async(file)=>
            (await import(file)).default)))
    .forEach((i)=>{
        app.use(i)
    })
})();

app.listen(3001,()=>{
    console.log('http://localhost:3001')
})