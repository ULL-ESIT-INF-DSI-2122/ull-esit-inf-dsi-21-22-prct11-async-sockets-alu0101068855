import 'mocha';
import { expect } from 'chai';
import { Add } from '../src/fs/add';
import { RequestType } from '../src/client';
import { ResponseType } from '../src/server';
import * as fs from 'fs';

describe('Clase Add',() => {
  it ('Test de la clase',() => {
    let objectRequestType: RequestType = {
      type: `add`,
      user: `Hector`,
      title: `Green_Note`,
      body: `This is a green note`,
      color: `green`
    } 
    let objectResponseType: ResponseType = {
      type: `add`,
      success: true,
      notes: []
    }
    let add2 = new Add(objectRequestType, objectResponseType);
    expect(add2 instanceof Add).to.eql (true);
    
    add2.addNote();
    expect(fs.existsSync('../dist/Hector/Green_Note.json')).to.eql(false);
    expect(objectResponseType.success).to.eql(false);
    expect(objectResponseType.type).to.eql('add');

    expect(objectRequestType.type).to.eql('add');
    expect(objectRequestType.user).to.eql('Hector');
    expect(objectRequestType.title).to.eql('Green_Note');
    expect(objectRequestType.body).to.eql('This is a green note');
    expect(objectRequestType.color).to.eql('green');
  });
});