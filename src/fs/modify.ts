import * as fs from 'fs';
import { RequestType } from '../client';
import { ResponseType } from '../server';
/**
 * Class Modify
 */
export class Modify {
  constructor(private a: RequestType, private b: ResponseType){}
  /**
   * Method modify
   * @returns Response
   */
  modify(): ResponseType{
    if (fs.existsSync(`./dist/${this.a.user}/${this.a.title}.json`)){
      fs.writeFile(`./dist/${this.a.user}/${this.a.title}.json`, JSON.stringify(this.a, null, 2), 'utf8', (err) => {
        if (err) {
          this.b.success = false;
          this.b.notes?.push('This file already exists');
          return this.b;
        }
      });
    }
    else{
      this.b.success = false;
      this.b.notes?.push(`This file doesn't exists`);
      return this.b;
    }
    this.b.notes?.push(`Modified ${this.a.title}`);
    return this.b;
  }
}

