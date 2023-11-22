import connection from '../../lib/mongodb';


export default function Home({ data } : any) {
  return (
    <div>
      <h1>Data from MongoDB:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getStaticProps() {
  const db = connection.db.Con('your-database-name');
  const collection = db.collection('your-collection-name');
  const data = await collection.find().toArray();

  return {
    props: {
      data,
    },
  };
}
