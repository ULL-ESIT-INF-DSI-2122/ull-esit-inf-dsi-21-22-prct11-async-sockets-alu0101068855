import 'mocha';
import { expect } from 'chai';
import { Read } from '../src/fs/read';
import { RequestType } from '../src/client';
import { ResponseType } from '../src/server';
import * as fs from 'fs';

describe('Clase Read',() => {
  it ('Test de la clase',() => {
    let objectRequestType: RequestType = {
      type: `read`,
      user: `Hector`,
      title: `Green_Note`,
    } 
    let objectResponseType: ResponseType = {
      type: `read`,
      success: true,
      notes: []
    }
    let read2 = new Read(objectRequestType, objectResponseType);
    expect(read2 instanceof Read).to.eql (true);
    
    expect(fs.existsSync('../dist/Hector/Green_Note.json')).to.eql(false);
    expect(objectResponseType.success).to.eql(true);
    expect(objectResponseType.type).to.eql('read');

    expect(objectRequestType.type).to.eql('read');
    expect(objectRequestType.user).to.eql('Hector');
    expect(objectRequestType.title).to.eql('Green_Note');
  });
});