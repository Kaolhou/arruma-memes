import fs from 'fs'
import { extname,resolve } from 'path'


export function find(path:string/*, ext:string|string[]*/):string[]{
    return fs.readdirSync(path).filter(file=>{
        return extname(file)==='.ts'
    }).map((file)=>resolve(path,file))
}