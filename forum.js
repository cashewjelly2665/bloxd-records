const firebaseConfig = {
    apiKey: "AIzaSyDD7rJRNG1P4Hx5sawqP-J1CK4RBwOxhfs",
    authDomain: "bloxd-records-forum.firebaseapp.com",
    projectId: "bloxd-records-forum",
    storageBucket: "bloxd-records-forum.appspot.com",
    messagingSenderId: "989555896531",
    appId: "1:989555896531:web:7e63adcd04066f3343a426"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById("login-btn").addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(result => {
        console.log("User signed in:", result.user);
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("logout-btn").style.display = "block";
    }).catch(error => console.error(error));
});

document.getElementById("logout-btn").addEventListener("click", () => {
    auth.signOut().then(() => {
        console.log("User signed out");
        document.getElementById("login-btn").style.display = "block";
        document.getElementById("logout-btn").style.display = "none";
    });
});

auth.onAuthStateChanged(user => {
    if (user) {
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("logout-btn").style.display = "block";
    } else {
        document.getElementById("login-btn").style.display = "block";
        document.getElementById("logout-btn").style.display = "none";
    }
});
