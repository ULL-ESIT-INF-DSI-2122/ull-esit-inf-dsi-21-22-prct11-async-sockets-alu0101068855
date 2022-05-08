import * as fs from 'fs';
import { RequestType } from '../client';
import { ResponseType } from '../server';
/**
 * Class Read
 */
export class Read {
  constructor(private a: RequestType, private b: ResponseType){}
  /**
   * Method read
   * @returns Response
   */
  read(): ResponseType{
    if (fs.existsSync(`./dist/${this.a.user}/${this.a.title}.json`)){
      this.a = require(`../${this.a.user}/${this.a.title}.json`);
      this.b.notes?.push(`${this.a.body}`);
    }
    else{
      this.b.success = false;
      this.b.notes?.push(`Invalid user: ${this.a.user} or filename: ${this.a.title}`);
    }
    return this.b;
  }
}
