import { auth, db } from "./firebase-config.js";
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

window.saveProfile = async () => {
    const user = await signInAnonymously(auth);
    const nick = document.getElementById('nick').value;
    const isFounder = (nick === "YOUR_ADMIN_NAME"); // Yahan apna naam set karein

    const data = {
        username: nick,
        level: isFounder ? 99 : 1,
        coins: isFounder ? 99999999 : 100,
        diamonds: isFounder ? 99999999 : 0,
        badges: isFounder ? ["Founder", "Elite", "Legend"] : ["Newbie"]
    };

    await setDoc(doc(db, "players", user.user.uid), data);
    alert("Welcome to TokaPlay!");
    window.location.href = "home.html";
};