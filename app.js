<!DOCTYPEimport { auth, db } from "./firebase-config.js";
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

window.completeRegistration = async () => {
    const name = document.getElementById('nickname').value;
    const dob = document.getElementById('dob').value;
    const region = document.getElementById('region').value;

    if(!name || !dob) return alert("Please fill all details!");

    const user = await signInAnonymously(auth);
    await setDoc(doc(db, "players", user.user.uid), { 
        username: name, gender: gender, dob: dob, region: region 
    });
    window.location.href = "home.html";
};