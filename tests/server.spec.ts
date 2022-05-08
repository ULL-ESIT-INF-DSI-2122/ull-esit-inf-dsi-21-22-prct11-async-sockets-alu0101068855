import 'mocha';
import { expect } from 'chai';
import {Server} from '../dist/server';

describe('Clase Server',() => {
  it ('Test de la clase',() => { 
    let server2 = new Server();
    expect(server2 instanceof Server).to.eql (true);
  });
});