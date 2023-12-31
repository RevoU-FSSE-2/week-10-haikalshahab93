const { MongoClient } = require("mongodb");

const MONGO_PROD = `mongodb://mongo:vFVwPhnrNO5TPMiNbGoD@containers-us-west-67.railway.app:7414`
const MONGO_URI= `mongodb://127.0.0.1:27017`

const DB_URI = process.env.ENV === 'production' ? MONGO_PROD : MONGO_URI 
const connectToDb = async () => {
  try {
    const client = await new MongoClient(DB_URI).connect();
    const db = client.db(process.env.MONGO_DB);
    console.log(`Connection Success`);
    return db
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDb;