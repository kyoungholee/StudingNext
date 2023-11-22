import { MongoClient } from 'mongodb';

const uri : any= process.env.MONGODB_URI;
const options : any= {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client : any;
let connection : any

if (!connection) {
  client = new MongoClient(uri, options);
  connection = client.connect();
}

export default connection;
