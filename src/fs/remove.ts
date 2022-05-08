import * as fs from 'fs';
import { RequestType } from '../client';
import { ResponseType } from '../server';
/**
 * Class Remove
 */
export class Remove {
  constructor(private a: RequestType, private b: ResponseType){}
  /**
   * Method remove
   * @returns Response
   */
  remove(): ResponseType{
    if (fs.existsSync(`./dist/${this.a.user}/${this.a.title}.json`)){
      fs.promises.rm(`./dist/${this.a.user}/${this.a.title}.json`);
      this.b.notes?.push(`Note: ${this.a.user}/${this.a.title} removed`);
    }
    else{
      this.b.success = false;
      this.b.notes?.push(`Invalid user: ${this.a.user} or filename: ${this.a.title}`);
      return this.b;
    }
    return this.b;
  }
}
