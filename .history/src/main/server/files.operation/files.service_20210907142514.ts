import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import path from 'path';

@Injectable()
export class FilesService {
    getDeskImgList(): any {
        return new Promise((resolve) => {
            let dirs = [];
            let pathName = process.env.NODE_ENV === 'development' ? path.join(__dirname, `../resources/desk`).split('/dist/electron/').join('/src/main/server/') :
            path.join(__dirname, `../resources/desk`).split('/dist/electron/').join('/dist/electron/main/')
            // console.log(pathName);
            fs.readdir(pathName, function(err, files){
                files.map( i => {
                    dirs.push(`${pathName}/${i}`)
                })
                resolve(dirs)
            })
        })
    }
}
