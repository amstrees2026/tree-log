import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {

    apiKey: "AIzaSyD2XTkILn4iMgR_LE6sDlqI_08NaTV5ebo",

    authDomain: "tree-log-42cf3.firebaseapp.com",

    projectId: "tree-log-42cf3",

    storageBucket: "tree-log-42cf3.firebasestorage.app",

    messagingSenderId: "580957773231",

    appId: "1:580957773231:web:d9a8301c3a869e157fa35a"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Login Button
document.getElementById("loginBtn").addEventListener("click", login);

// Allow Enter key to login
document.addEventListener("keydown", function(event){

    if(event.key==="Enter"){

        login();

    }

});

async function login(){

    const email=document.getElementById("email").value.trim();

    const password=document.getElementById("password").value;

    if(email==="" || password===""){

        document.getElementById("status").style.color="red";

        document.getElementById("status").innerHTML="Please enter your email and password.";

        return;

    }

    try{

        await signInWithEmailAndPassword(auth,email,password);

        document.getElementById("status").style.color="green";

        document.getElementById("status").innerHTML="✅ Login Successful! Redirecting...";

        setTimeout(function(){

            window.location.href="admin.html";

        },1000);

    }

    catch(error){

        document.getElementById("status").style.color="red";

        document.getElementById("status").innerHTML="❌ " + error.message;

    }

}
