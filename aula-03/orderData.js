import { ref, query, orderByChild, onChildAdded } from "firebase/database";
import { dbConnect } from "./connectToFB.js";

dbConnect()
  .then((db) => {
    const dbRef = ref(db, "produtos");
    const consulta = query(dbRef, orderByChild("id_prod"));
    onChildAdded(consulta, (data) => {
      console.log(data.val());
    });
  })
  .catch((error) => console.log(error));
