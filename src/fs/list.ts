import * as fs from 'fs';
import { RequestType } from '../client';
import { ResponseType } from '../server';

export class List {
  constructor(private a: RequestType, private b: ResponseType){}
  list(): ResponseType{
    if (fs.existsSync(`./dist/${this.a.user}`)){      
      fs.readdir(`./dist/${this.a.user}`, (err, files) => {
        if (err) {
          this.b.success = false;
          this.b.notes?.push(String(err));
          return this.b;
        }
        else {
          files.forEach(element => {
            this.a = require(`../${this.a.user}/${element}`);
            this.b.notes?.push(element);
          });
        }
      });
    }
    else{
      this.b.success = false;
      this.b.notes?.push(`Invalid user: ${this.a.user}`);
    }
  return this.b;
  }
}
