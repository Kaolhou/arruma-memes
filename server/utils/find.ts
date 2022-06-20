import fs from 'fs'
import { extname,resolve } from 'path'


export function find(path:string, ext:string = ''):string[]{
    if(ext===''){
        return fs.readdirSync(path).map((file)=>resolve(path,file))
    }else{
        return fs.readdirSync(path).filter(file=>{
            return extname(file)===ext
        }).map((file)=>resolve(path,file))
    }
}