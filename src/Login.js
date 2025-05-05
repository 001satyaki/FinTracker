import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAblJAXsiG8QO8F3cDumdhrbogd7lAE-fc",
  authDomain: "hello-world-hacks-de5c9.firebaseapp.com",
  projectId: "hello-world-hacks-de5c9",
  storageBucket: "hello-world-hacks-de5c9.firebasestorage.app",
  messagingSenderId: "603100474075",
  appId: "1:603100474075:web:b883bbfd193692c9f6fafe",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "profile.html";
    })
    // .then((userCredential) => {
    //   alert("Successfully logged in");
    // })
    .then(
      onAuthStateChanged(auth, (user) => {
        console.log("user status changed", user);
      })
    )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
