import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import path from 'path';

@Injectable()
export class FilesService {
    getDeskImgList(): any {
    let dirs = [];
    let temPath = "E:/test";
    let pathName = path.join(__dirname, `../resources/desk`)
    console.log(pathName);
    return pathName
    // fs.readdir(pathName, function(err, files){
    //     for (var i=0; i<files.length; i++)
    //     {
    //     fs.stat(path.join(pathName, files[i]), function(err, data){     
    //             if(data.isFile())
    //             {               
    //                 dirs.push(files[i]);
    //             }
    //         });
    //     } 
    //     console.log(dirs);  
    // })

    }
}
