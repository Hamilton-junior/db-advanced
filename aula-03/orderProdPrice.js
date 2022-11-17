import { ref, query, orderByChild, onChildAdded } from "firebase/database";
import { dbConnect } from "./connectToFB.js";

dbConnect()
  .then((db) => {
    const dbRef = ref(db, "produtos/");
    const consulta = query(dbRef, orderByChild("preco"));
    onChildAdded(consulta, (dados) => {
      console.log(dados.val());
    });
  })
  .catch((error) => console.log(error));
