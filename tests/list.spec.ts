import 'mocha';
import { expect } from 'chai';
import { List } from '../src/fs/list';
import { RequestType } from '../src/client';
import { ResponseType } from '../src/server';

describe('Clase List',() => {
  it ('Test de la clase',() => {
    let objectRequestType: RequestType = {
      type: `list`,
      user: `Hector`
    } 
    let objectResponseType: ResponseType = {
      type: `list`,
      success: true,
      notes: []
    }
    let list1 = new List(objectRequestType, objectResponseType);
    expect(list1 instanceof List).to.eql (true);
    
    expect(objectResponseType.success).to.eql(true);
    expect(objectResponseType.type).to.eql('list');

    expect(objectRequestType.type).to.eql('list');
    expect(objectRequestType.user).to.eql('Hector');
  });
});