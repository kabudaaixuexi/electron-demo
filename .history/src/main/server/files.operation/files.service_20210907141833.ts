import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import path from 'path';

@Injectable()
export class FilesService {
    getDeskImgList(): any {
        let dirs = [];
        let pathName = process.env.NODE_ENV === 'development' ? path.join(__dirname, `../resources/desk`).split('/dist/electron/').join('/src/main/server/') :
        path.join(__dirname, `../resources/desk`).split('/dist/electron/').join('/dist/electron/main/')
        console.log(pathName);
        fs.readdir(pathName, function(err, files){
            console.log(files);
            
            for (var i=0; i<files.length; i++)
            {
            fs.stat(path.join(pathName, files[i]), function(err, data){     
                    if(data.isFile())
                    {               
                        dirs.push(files[i]);
                    }
                });
            } 
            console.log(dirs);  
            return dirs
        })

    }
}
