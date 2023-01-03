import { MongoClient } from "mongodb";

const myDB = {
  server: "127.0.0.1",
  port: 27017,
};
const uri = `mongodb://${myDB.server}:${myDB.port}`;
const client = new MongoClient(uri);

try {
  await client.connect();
  if (client.db("admin").command({ ping: 1 })) {
    console.log("Conectado!");
  } else {
    throw Error("Erro ao conectar ao banco!");
  }
  const dbName = "loja";

  // tarefa 1
  // db.produtos.createIndex({descricao:'text'})
  const resultOne = await client
    .db(dbName)
    .collection("produtos")
    .find({
      $text: {
        $search: "GAMER",
      },
    })
    .toArray();
  //console.table(resultOne);

  // tarefa 2
  // db.produtos.dropIndex('descricao_text')
  // db.produtos.createIndex({nome:'text'})
  const resultTwo = await client
    .db(dbName)
    .collection("produtos")
    .find({
      $text: {
        $search: "SmartWatch",
        $caseSensitive: true,
      },
    })
    .toArray();
  //console.table(resultTwo);

  // tarefa 3
  // db.produtos.dropIndex('nome_text')
  // db.produtos.createIndex({descricao:'text'})
  const resultThree = await client
    .db(dbName)
    .collection("produtos")
    .find({
      $text: {
        $search: '"Câmera Dupla"',
        $caseSensitive: true,
      },
    })
    .toArray();
  //console.table(resultThree);
} catch (error) {
  console.log(error);
} finally {
  await client.close();
  process.exit(0);
}
