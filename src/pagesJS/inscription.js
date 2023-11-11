import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY",
  authDomain: "validation-atelier-js.firebaseapp.com",
  databaseURL: "https://validation-atelier-js-default-rtdb.firebaseio.com",
  projectId: "validation-atelier-js",
  storageBucket: "validation-atelier-js.appspot.com",
  messagingSenderId: "466332062090",
  appId: "1:466332062090:web:ffbe45ef4a7371a7b5b873",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

const handleRegistration = async (event) => {
  event.preventDefault();
  
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const nomInput = document.getElementById("nom");
  const prenomInput = document.getElementById("prenom");
  const statusInput = document.getElementById("status");
  const adresseInput = document.getElementById("adresse");
  const telInput = document.getElementById("tel");
  const adresseecoleInput = document.getElementById("adresseecole");
  const emailecoleInput = document.getElementById("emailecole");
  const secteurInput = document.getElementById("secteur");
  const nomecoleInput = document.getElementById("nomecole");
  
    const email = emailInput.value;
    const password = passwordInput.value;
    const nom = nomInput.value;
    const prenom = prenomInput.value;
    const status = statusInput.value;
    const adresse = adresseInput.value;
    const tel = telInput.value;
    const adresseecole = adresseecoleInput.value;
    const emailecole = emailecoleInput.value;
    const secteur = secteurInput.value;
    const nomecole = nomInput.value;
    
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
        );
        const user = userCredential.user;
        
        const userData = {
          nom: nom,
          prenom: prenom,
          status: status,
          adresse: adresse,
          tel: tel,
          adresseecole: adresseecole,
          emailecole: emailecole,
          secteur: secteur,
          nomecole: nomecole,
          email: email,
          password: password,
      };
      
      const userRef = collection(db, "utilisateurs");
      await addDoc(userRef, userData);
      
      alert("Utilisateur enregistré avec succès");
      
      // Vous pouvez rediriger l'utilisateur vers une autre page ici si nécessaire
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erreur lors de l'inscription :", errorCode, errorMessage);
    }
    emailInput.value = ""
    passwordInput.value = ""
    nomInput.value = ""
    prenomInput.value = ""
    statusInput.value = ""
    adresseInput.value = ""
    telInput.value = ""
    adresseecoleInput.value = ""
    emailecoleInput.value = ""
    secteurInput.value = ""
    nomecoleInput.value = ""

  };

console.log('page inscription')
const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", handleRegistration);