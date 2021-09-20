const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'node-kurs';
const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log('połączenie udane!');

  const db = client.db(dbName);

  // tworzenie
  // await db
  //   .collection('companies')
  //   .insertOne({ slug: 'tworcastron', name: 'Tworca Stron.pl' });

  // pobieranie wartości
  const res = await db
    .collection('companies')
    .find({ _id: ObjectId('614874f007b8cda6c007b136')})
    .toArray();
  console.log(res);

  // usuwanie
  // const collection = db.collection('companies');
  // await collection.deleteOne({ slug: 'tworcastron' });
}

main()
  .catch(ex => console.log('Coś poszło nie tak'))
  .finally(() => client.close());
