import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

set(ref(db, "clientes/-NFsYMjCQFFiBxaKz2AC"), {
  nome: "João Carlos",
  idade: "20",
})
  .then(() => {
    console.log("Usuário alterado");
    process.exit(0);
  })
  .catch((error) => {
    console.log(`Ocorreu o erro: ${error}`);
  });
