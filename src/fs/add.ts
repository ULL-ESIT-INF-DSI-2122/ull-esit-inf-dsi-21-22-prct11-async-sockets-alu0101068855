import * as fs from 'fs';
import * as path from 'path';
import { RequestType } from '../client';
import { ResponseType } from '../server';

export class Add {
  constructor(private a: RequestType, private b: ResponseType){}
  
  addNote(): ResponseType{ 
    if (!fs.existsSync(`./dist/${this.a.user}`)){
      fs.mkdir(path.join(__dirname, String(this.a.user)), (err) => {
        if (err) {
          this.b.success = false;
          this.b.notes?.push(String(err));
          return this.b;
        }
        else {
          this.b.notes?.push(`Created dir ${this.a.user} at ./dist/`);
        }
      });
    }
    //Sin timeout no se puede crear
    if (fs.existsSync(`./dist/${this.a.user}/${this.a.title}.json`)){
      this.b.success = false;
      this.b.notes?.push('This file already exists');
      return this.b;
    }
    else{
      setTimeout(() => {
        fs.writeFile(`./dist/${this.a.user}/${this.a.title}.json`, JSON.stringify(this.a, null, 2), 'utf8', (err) => {
          if (err) {
            this.b.success = false;
            this.b.notes?.push(String(err));
            return this.b;
          }
        });
      }, 1000);
    }
    this.b.notes?.push(`Created ${this.a.title}`);
    return this.b;
  }
}