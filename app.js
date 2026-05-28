import { auth, db } from "./firebase-config.js";
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

window.register = async () => {
    const nick = document.getElementById('nick').value;
    if(!nick) return alert("Nickname zaroori hai!");
    try {
        const userCredential = await signInAnonymously(auth);
        await setDoc(doc(db, "players", userCredential.user.uid), { 
            username: nick, 
            coins: 100,
            createdAt: new Date().toISOString()
        });
        window.location.href = "home.html";
    } catch (error) {
        alert("Error: " + error.message);
    }
};