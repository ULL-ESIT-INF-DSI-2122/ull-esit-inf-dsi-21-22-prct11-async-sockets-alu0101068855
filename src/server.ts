import * as net from 'net';
import { RequestType } from './client';
import * as chalk from 'chalk';
import { Add } from './fs/add';
import { Modify } from './fs/modify';
import { Remove } from './fs/remove';
import { Read } from './fs/read';
import { List } from './fs/list';

export type ResponseType = {
  type: 'add' | 'mod' | 'remove' | 'read' | 'list';
  success: boolean;
  notes?: string[];
}

export class Server {
  constructor(){}
  start(){       
  net.createServer((connection) => {
    console.log('A client has connected.');

    connection.on('data', (data) => {
      let a: RequestType = JSON.parse(data.toString());
      let b: ResponseType = {
        type: `${a.type}`,
        success: true,
        notes: []
      }

      if (b.type === 'add'){
        let c = new Add(a, b);
        c.addNote();
      }

      if (b.type === 'mod'){
        let c = new Modify(a, b);
        c.modify();
      }

      if (b.type === 'remove'){
        let c = new Remove(a, b);
        c.remove();
      }

      if (b.type === 'read'){
        let c = new Read(a, b);
        c.read();
        if (b.success === true){
          a = require(`./${a.user}/${a.title}.json`);
          connection.write(chalk.green(`${a.title}:\n`));
          connection.write(chalk[`${a.color}`](b.notes?.toString()));
        }
      }

      if (b.type === 'list'){
        let c = new List(a, b);
        c.list();
          setTimeout(() => {
            if (b.success === true){
              connection.write(chalk.green(`Your notes:`));
              b.notes?.forEach(element => {
                a = require(`./${a.user}/${element}`);
                connection.write(chalk[`${a.color}`](a.title) + '\n');
              })
            }
          }, 1000);
      }

      if ( b.success === true ){
        if (b.type === 'add' || b.type === 'mod' || b.type === 'remove'){
          connection.write(chalk.green(`${JSON.stringify(b.notes, null, 2)}`));
        }
      }
      else {
        connection.write(chalk.red(`Error: ${JSON.stringify(b.notes, null, 2)}`));
      }
      //console.log(b.notes);
    });

    connection.on('close', () => {
      console.log('A client has disconnected.');
    });

  }).listen(60300, () => {
    console.log('Waiting for clients to connect.');
  });
  }
}

let server1 = new Server();
server1.start();
