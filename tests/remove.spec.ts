import 'mocha';
import { expect } from 'chai';
import { Remove } from '../src/fs/remove';
import { RequestType } from '../src/client';
import { ResponseType } from '../src/server';
import * as fs from 'fs';


describe('Clase Remove',() => {
  it ('Test de la clase',() => {
    let objectRequestType: RequestType = {
      type: `remove`,
      user: `Hector`,
      title: `Green_note`
    } 
    let objectResponseType: ResponseType = {
      type: `remove`,
      success: true,
      notes: []
    }
    let remove1 = new Remove(objectRequestType, objectResponseType);
    expect(remove1 instanceof Remove).to.eql (true);
    remove1.remove();

    expect(fs.existsSync('../dist/Hector/Green_note.json')).to.eql(false);

    expect(objectResponseType.success).to.eql(false);
    expect(objectResponseType.type).to.eql('remove');

    expect(objectRequestType.type).to.eql('remove');
    expect(objectRequestType.user).to.eql('Hector');
    expect(objectRequestType.title).to.eql('Green_note');
  });
});