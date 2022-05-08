import 'mocha';
import { expect } from 'chai';
import { Modify } from '../src/fs/modify';
import { RequestType } from '../src/client';
import { ResponseType } from '../src/server';
import * as fs from 'fs';

describe('Clase Modify',() => {
  it ('Test de la clase',() => {
    let objectRequestType: RequestType = {
      type: `mod`,
      user: `Hector`,
      title: `Green_Note`,
      body: `This is a green note modified`,
      color: `green`
    } 
    let objectResponseType: ResponseType = {
      type: `mod`,
      success: true,
      notes: []
    }
    let modify2 = new Modify(objectRequestType, objectResponseType);
    expect(modify2 instanceof Modify).to.eql (true);
    
    modify2.modify();
    expect(fs.existsSync('../dist/Hector/Green_Note.json')).to.eql(false);
    expect(objectResponseType.success).to.eql(true);
    expect(objectResponseType.type).to.eql('mod');

    expect(objectRequestType.type).to.eql('mod');
    expect(objectRequestType.user).to.eql('Hector');
    expect(objectRequestType.title).to.eql('Green_Note');
    expect(objectRequestType.body).to.eql('This is a green note modified');
    expect(objectRequestType.color).to.eql('green');
  });
});