import { initializeApp } from "firebase/app";
import { getDatabase, push, ref } from "firebase/database";

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
