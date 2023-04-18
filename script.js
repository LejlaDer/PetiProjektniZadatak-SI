// firebase-config.js
// Initialize Firebase with your Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCMWzJL011iKFQrgL8Aq-avjaKaUH-xAME",
    authDomain: "fajerbejs-d8138.firebaseapp.com",
    databaseURL: "https://fajerbejs-d8138-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fajerbejs-d8138",
    storageBucket: "fajerbejs-d8138.appspot.com",
    messagingSenderId: "7715332708",
    appId: "1:7715332708:web:fffadf9782f216c47db571"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



//----------------------------------------------------



// app.js
// Get references to DOM elements
var signupEmailInput = document.getElementById('signup-email');
var signupPasswordInput = document.getElementById('signup-password');
var signinEmailInput = document.getElementById('signin-email');
var signinPasswordInput = document.getElementById('signin-password');

// Sign up function
function signUp() {
    var email = signupEmailInput.value;
    var password = signupPasswordInput.value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user) {
            console.log('Sign up successful', user);
        })
        .catch(function(error) {
            console.error('Sign up failed', error);
        });
}

// Sign in function
function signIn() {
    var email = signinEmailInput.value;
    var password = signinPasswordInput.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
            console.log('Sign in successful', user);
        })
        .catch(function(error) {
            console.error('Sign in failed', error);
        });
}

// Sign out function
function signOut() {
    firebase.auth().signOut()
        .then(function() {
            console.log('Sign out successful');
        })
        .catch(function(error) {
            console.error('Sign out failed', error);
        });
}
