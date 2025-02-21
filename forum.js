import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDD7rJRNG1P4Hx5sawqP-J1CK4RBwOxhfs",
    authDomain: "bloxd-records-forum.firebaseapp.com",
    projectId: "bloxd-records-forum",
    storageBucket: "bloxd-records-forum.appspot.com",
    messagingSenderId: "989555896531",
    appId: "1:989555896531:web:7e63adcd04066f3343a426"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("login-btn").addEventListener("click", async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("User signed in:", result.user);
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("logout-btn").style.display = "block";
    } catch (error) {
        console.error("Login Error:", error);
    }
});

document.getElementById("logout-btn").addEventListener("click", async () => {
    try {
        await signOut(auth);
        console.log("User signed out");
        document.getElementById("login-btn").style.display = "block";
        document.getElementById("logout-btn").style.display = "none";
    } catch (error) {
        console.error("Logout Error:", error);
    }
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("logout-btn").style.display = "block";
    } else {
        document.getElementById("login-btn").style.display = "block";
        document.getElementById("logout-btn").style.display = "none";
    }
});
