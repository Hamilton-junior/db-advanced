import { ref, query, orderByKey, onValue } from "firebase/database";
import { dbConnect } from "./connectToFB.js";

dbConnect()
  .then((db) => {
    const dbRef = ref(db, "produtos");
    const consulta = query(dbRef, orderByKey());
    onValue(consulta, (data) => {
      let arrayData = Object.entries(data.val());
      let reverseData = Object.fromEntries(arrayData.reverse());
      console.log(reverseData);
    });
  })
  .catch((error) => console.log(error));
