import * as net from 'net';
import * as yargs from 'yargs';
/**
 * type Request
 */
export type RequestType = {
  type: 'add' | 'mod' | 'remove' | 'read' | 'list';
  user?: string;
  title?: string;
  body?: string;
  color?: string;
}
/**
 * Class Client
 */
export class Client{
  constructor(){}
  /**
   * Starts client request to the server
   */
  start(){
    /**
     * Commands add
     */
    yargs.command({
      command: 'add',
      describe: 'Add a new note',
      builder: {
        title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string',
        },
        user: {
          describe: 'Name user',
          demandOption: true,
          type: 'string',
        },
        body: {
          describe: 'Body of the note',
          demandOption: true,
          type: 'string',
        },
        color: {
          describe: 'Color of the letters',
          demandOption: true,
          type: 'string',
        }
      },
      handler(argv) {
        let object: RequestType = {
          type: `add`,
          user: `${argv.user}`,
          title: `${argv.title}`,
          body: `${argv.body}`,
          color: `${argv.color}`
        }
        const client = net.createConnection({ port: 60300 }, () => {
          console.log('connected to server!');
          client.write(`${JSON.stringify(object)}`);
        });
        client.on('data', (data) => {
          console.log(`${data}`);
          client.end();
        });
        client.on('end', () => {
          console.log('disconnected from server');
        });
    }
    });

    /**
     * Commands modify
     */
    yargs.command({
      command: 'mod',
      describe: 'Modify a note',
      builder: {
        title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string',
        },
        user: {
          describe: 'Username',
          demandOption: true,
          type: 'string',
        },
        body: {
          describe: 'Body of the note',
          demandOption: true,
          type: 'string',
        },
        color: {
          describe: 'Color of the letters',
          demandOption: true,
          type: 'string',
        }
      },
      handler(argv) {
        let object: RequestType = {
          type: `mod`,
          user: `${argv.user}`,
          title: `${argv.title}`,
          body: `${argv.body}`,
          color: `${argv.color}`
        }
        const client = net.createConnection({ port: 60300 }, () => {
          console.log('connected to server!');
          client.write(`${JSON.stringify(object)}`);
        });
        client.on('data', (data) => {
          console.log(`${data}`);
          client.end();
        });
        client.on('end', () => {
          console.log('disconnected from server');
        });
      }
    });

    /**
     * Commands remove
     */
    yargs.command({
      command: 'remove',
      describe: 'Removes a note',
      builder: {
        title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string',
        },
        user: {
          describe: 'Username',
          demandOption: true,
          type: 'string',
        }
      },
      handler(argv) {
        let object: RequestType = {
          type: `remove`,
          user: `${argv.user}`,
          title: `${argv.title}`,
        }
        const client = net.createConnection({ port: 60300 }, () => {
          console.log('connected to server!');
          client.write(`${JSON.stringify(object)}`);
        });
        client.on('data', (data) => {
          console.log(`${data}`);
          client.end();
        });
        client.on('end', () => {
          console.log('disconnected from server');
        });
      }
    });

    /**
     * Commands read
     */
    yargs.command({
      command: 'read',
      describe: 'Reads a note',
      builder: {
        title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string',
        },
        user: {
          describe: 'Username',
          demandOption: true,
          type: 'string',
        }
      },
      handler(argv) {
        let object: RequestType = {
          type: `read`,
          user: `${argv.user}`,
          title: `${argv.title}`,
        }
        const client = net.createConnection({ port: 60300 }, () => {
          console.log('connected to server!');
          client.write(`${JSON.stringify(object)}`);
        });
        client.on('data', (data) => {
          console.log(`${data}`);
          client.end();
        });
        client.on('end', () => {
          console.log('disconnected from server');
        });
      }
    });


    /**
     * Commands list
     */
    yargs.command({
      command: 'list',
      describe: 'Lists users notes',
      builder: {
        user: {
          describe: 'Username',
          demandOption: true,
          type: 'string',
        }
      },
      handler(argv) {
        let object: RequestType = {
          type: `list`,
          user: `${argv.user}`
        }
        const client = net.createConnection({ port: 60300 }, () => {
          console.log('connected to server!');
          client.write(`${JSON.stringify(object)}`);
        });
        client.on('data', (data) => {
          console.log(`${data}`);
          client.end();
        });
        client.on('end', () => {
          console.log('disconnected from server');
        });
      }
    });
    yargs.parse();
  }
}

let client1 = new Client();
client1.start();
