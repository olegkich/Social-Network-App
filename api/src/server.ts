import createServer from "connect";
import { Express } from "express";
import {MongoClient} from 'mongodb'
import chalk from 'chalk'
import * as dotenv from "dotenv";

dotenv.config();


export class SNServer {
    
    rootApp: Express | null;
    port: string | null;

    constructor() {
        this.port = null;
        this.rootApp = null;
    }

    start(rootApp: Express) {
        

        this.rootApp = rootApp;
        this.port = process.env.PORT || "5000"

        rootApp.listen(this.port, () => {
            const uri: string | undefined = process.env.DB_URI
            console.log(process.env.PORT)

            if (uri) {
                this.connectToDB(new MongoClient(uri))

            }
            
        })
    }

    private async connectToDB(client: MongoClient) { 
        
        await client.connect();

        await client.db("admin").command({ping : 1})
        console.log(chalk.green('succesfully connected to database server.'))
    }
}