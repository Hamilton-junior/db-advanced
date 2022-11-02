import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child } from "firebase/database";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

const refNode = ref(db, "clientes/-NFsYMj8WP5ZrTAWK-ep");
const refAttr = child(refNode, "nome");
set(refAttr, "Maria Silva")
  .then(() => {
    console.log("Nome alterado");
    process.exit(0);
  })
  .catch((error) => {
    console.log(`Ocorreu o erro: ${error}`);
  });
