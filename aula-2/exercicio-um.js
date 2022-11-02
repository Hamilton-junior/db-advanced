import { initializeApp } from "firebase/app";
import { getDatabase, push, ref } from "firebase/database";

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

const mariaUser = {
  nome: "Maria",
  idade: 15,
};
const joaouser = {
  nome: "João",
  idade: 25,
};

const anaUser = {
  nome: "Ana",
  idade: 23,
};
push(ref(db, "clientes"), mariaUser);
push(ref(db, "clientes"), joaouser);
push(ref(db, "clientes"), anaUser);
