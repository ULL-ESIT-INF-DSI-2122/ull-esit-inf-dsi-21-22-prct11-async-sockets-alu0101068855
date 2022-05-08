import 'mocha';
import { expect } from 'chai';
import {Client} from '../dist/client';

describe('Class Client',() => {
  it ('Test de la clase',() => { 
    let client2 = new Client();
    expect(client2 instanceof Client).to.eql (true);
  });
});