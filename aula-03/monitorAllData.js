import { ref, onValue } from "firebase/database";
import { dbConnect } from "./connectToFB.js";

dbConnect()
  .then((db) => {
    const dbRef = ref(db, "produtos");
    onValue(dbRef, (snapshot) => {
      console.log("imprimiu de novo");
      console.log(snapshot.val());
    });
  })
  .catch((error) => console.log(error));
