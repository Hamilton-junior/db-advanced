// código do exercício 4
// import { ref, onChildChanged } from "firebase/database";
// import { dbConnect } from "./connectToFB.js";

// dbConnect()
//   .then((db) => {
//     const dbRef = ref(db, "produtos");
//     onChildChanged(dbRef, (snapshot) => {
//       console.log(snapshot.val());
//     });
//   })
//   .catch((error) => console.log(error));

// código do exercício 5
import { ref, onChildChanged, off } from "firebase/database";
import { dbConnect } from "./connectToFB.js";

dbConnect()
  .then((db) => {
    const dbRef = ref(db, "produtos");
    onChildChanged(dbRef, (snapshot) => {
      console.log(snapshot.val());
      if (snapshot.key == "-MwSzyJMlNDToTGtPuhc") {
        off(dbRef, "child_changed");
        console.log("callback removido");
      }
    });
  })
  .catch((error) => console.log(error));
