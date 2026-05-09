import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4Gc6gBUuFrnEYuyQcmt3ki7J8DyJ-OaI",
  authDomain: "zad8-maksym-kaminskyi-77313.firebaseapp.com",
  projectId: "zad8-maksym-kaminskyi-77313",
  storageBucket: "zad8-maksym-kaminskyi-77313.firebasestorage.app",
  messagingSenderId: "961602426227",
  appId: "1:961602426227:web:1bd07703d285b45d2d2106",
  measurementId: "G-7YQ3TLCV5G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.sendForm = async function () {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    try {
        await addDoc(collection(db, "messages"), {
            name,
            surname,
            email,
            message
        });

        alert("Dane zapisane w Firebase!");
    } catch (error) {
        console.log(error);
    }
}