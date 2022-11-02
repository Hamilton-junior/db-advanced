import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set, child } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9zQ95DVy-XHBfaDNEPH77scarXZKDCso",
  authDomain: "banco-de-dados-avancado.firebaseapp.com",
  databaseURL: "https://banco-de-dados-avancado-default-rtdb.firebaseio.com",
  projectId: "banco-de-dados-avancado",
  storageBucket: "banco-de-dados-avancado.appspot.com",
  messagingSenderId: "105517626074",
  appId: "1:105517626074:web:b5def33b0999658b59ebe3",
};

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
