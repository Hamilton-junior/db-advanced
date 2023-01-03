import { MongoClient } from "mongodb";
import { promises as fs } from "fs";

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
  const product = {
    id_prod: 138,
    nome: "SmartWatch Samsumg 5G 4GB",
    descricao: "SmartWatch",
    importado: true,
    preco: 17450,
    qtd_estoque: 150,
  };
  //const result = await client
  //.db(dbName)
  //.collection("produtos")
  //.insertOne(product);

  // tarefa 2
  const products = [
    {
      id_prod: 139,
      nome: "Cadeira Gamer Husky Gaming Hailstorm Blue",
      descricao:
        "Cadeira Gamer Husky Gaming Hailstorm, Preto e Azul, Com Almofadas, Reclinável, Descanso de Braço 2D - HHA-BB",
      qtd_estoque: 250,
      preco: 1249.9,
      importado: false,
      desconto: 20,
    },
    {
      id_prod: 140,
      nome: "Cadeira Gamer Husky Gaming Hailstorm 900",
      descricao:
        " Preto e Vermelho, Com Almofadas, Reclinável com Sistema Frog, Descanso de Braço 3D - HGMA085",
      qtd_estoque: 130,
      preco: 1449.9,
      importado: false,
      desconto: 5,
    },
    {
      id_prod: 141,
      nome: "Jogo Ghostwire: Tokyo, PS5",
      descricao:
        "Aproveite essa oportunidade e adquira seu Jogo Ghostwire: Tokyo, PS5 com Ray tracing e áudio 3D.",
      qtd_estoque: 210,
      preco: 264,
      importado: true,
      desconto: 15,
    },
    {
      id_prod: 141,
      nome: "Computador All In One Positivo Master A1120",
      descricao:
        "Computador All In One Positivo Master A1120, Intel Celeron N 4000, 4GB, 500GB, 21.5´ Full HD, Windows 10 Home - 1702399",
      qtd_estoque: 110,
      preco: 2599.9,
      importado: false,
      desconto: 10,
    },
    {
      id_prod: 142,
      nome: "Smartphone Asus Zenfone 8 5G",
      descricao:
        "Smartphone Asus Zenfone 8 5G ZS590KS-2A077BR, 8GB RAM, 128GB, Câmera Dupla 64MP, Tela 5.92, Preto - 90AI0061-M00830",
      qtd_estoque: 410,
      preco: 3799.9,
      importado: true,
      desconto: 12,
    },
  ];
  //const resultTwo = await client
  //.db(dbName)
  //.collection("produtos")
  //.insertMany(products);

  // tarefa 3
  // 1
  const resultFilterOne = await client
    .db(dbName)
    .collection("produtos")
    .find(
      {},
      {
        projection: {
          importado: 0,
          _id: 0,
          descricao: 0,
        },
      }
    )
    .toArray();
  //console.table(resultFilterOne);

  //2
  const resultFilterTwo = await client
    .db(dbName)
    .collection("produtos")
    .find(
      {},
      {
        sort: { qtd_estoque: 1 },
        projection: {
          importado: 0,
          _id: 0,
          descricao: 0,
        },
      }
    )
    .toArray();
  //console.table(resultFilterTwo);

  //3
  const resultFilterThree = await client
    .db(dbName)
    .collection("produtos")
    .find({
      preco: { $gt: 10000 },
    })
    .toArray();
  //console.table(resultFilterThree);

  // 4
  const resultFilterFour = await client
    .db(dbName)
    .collection("produtos")
    .find(
      {
        $and: [{ qtd_estoque: { $gte: 100 } }, { qtd_estoque: { $lte: 500 } }],
      },
      {
        sort: { qtd_estoque: -1 },
      }
    )
    .toArray();
  //console.table(resultFilterFour);

  // 5
  const resultFilterFive = await client
    .db(dbName)
    .collection("produtos")
    .find(
      {
        importado: true,
      },
      {
        sort: { preco: 1 },
      }
    )
    .toArray();
  //console.table(resultFilterFive);

  // 6
  const resultFilterSix = await client
    .db(dbName)
    .collection("produtos")
    .find({
      preco: { $not: { $gt: 10000 } },
      importado: false,
    })
    .toArray();
  //console.table(resultFilterSix);

  // 7
  const resultFilterSeven = await client
    .db(dbName)
    .collection("produtos")
    .find({
      preco: { $in: [2599.9, 3500, 4500, 18500, 20500] },
    })
    .toArray();
  //console.table(resultFilterSeven);

  // 8
  const resultFilterEight = await client
    .db(dbName)
    .collection("produtos")
    .find({
      qtd_estoque: { $not: { $eq: 150 } },
    })
    .toArray();
  //console.table(resultFilterEight);

  // tarefa 4
  const lastResult = await client
    .db(dbName)
    .collection("produtos")
    .find(
      {
        desconto: { $exists: true },
      },
      {
        sort: { desconto: -1 },
      }
    )
    .toArray();
  console.table(lastResult);
} catch (error) {
  console.log(error);
} finally {
  await client.close();
  process.exit(0);
}
