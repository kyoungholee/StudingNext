


import { MongoClient } from "mongodb"

export default async function Home() {
  const client = await MongoClient.connect('mongodb+srv://dlrudgh1303:yqLabu15BLcsVXZV@testmongodb.4zru9hs.mongodb.net/', { usNewUrlParser: true });
  const db = client.db("forum");
  return (
   
  )
}