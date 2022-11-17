import { get, ref } from "firebase/database";
import { dbConnect } from "./connectToFB.js";

dbConnect()
  .then((db) => {
    const dbRef = ref(db);
    get(dbRef, `produtos/`)
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("Dados não encontrados!");
        }
        process.exit();
      })
      .catch((error) => {
        console.log(error);
        process.exit();
      });
  })
  .catch((error) => console.log(error));
