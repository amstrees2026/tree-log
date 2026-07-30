import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
    getFirestore,
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyD2XTkILn4iMgR_LE6sDlqI_08NaTV5ebo",

  authDomain: "tree-log-42cf3.firebaseapp.com",

  projectId: "tree-log-42cf3",

  storageBucket: "tree-log-42cf3.firebasestorage.app",

  messagingSenderId: "580957773231",

  appId: "1:580957773231:web:d9a8301c3a869e157fa35a"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("saveBtn").addEventListener("click", saveTree);

async function saveTree(){

    const treeID = document.getElementById("treeID").value.trim();
    const commonName = document.getElementById("commonName").value.trim();
    const scientificName = document.getElementById("scientificName").value.trim();
    const age = document.getElementById("age").value.trim();
    const location = document.getElementById("location").value.trim();

    if(treeID===""){
        alert("Enter Tree ID");
        return;
    }

    await setDoc(doc(db,"trees",treeID),{

        "Common Name": commonName,
        "Scientific Name": scientificName,
        "Age": age,
        "Location": location

    });

    document.getElementById("status").innerHTML =
    "✅ Tree Saved Successfully!";

    document.getElementById("treeID").value="";
    document.getElementById("commonName").value="";
    document.getElementById("scientificName").value="";
    document.getElementById("age").value="";
    document.getElementById("location").value="";
}
