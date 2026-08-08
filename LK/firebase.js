"https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"
"https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"

  firebase.initializeApp({
    apiKey: "AIzaSyAv01u5Klo4vCTtINHf-BXSlyNXGQlA9aw",
    authDomain: "lk-shifting.firebaseapp.com",
    projectId: "lk-shifting",
    storageBucket: "lk-shifting.firebasestorage.app",
    messagingSenderId: "137281969368",
    appId: "1:137281969368:web:f1a0ed8b7b31667f70cbad",
    measurementId: "G-8Y1HZ0BHFZ"
  });

  const db = firebase.firestore();

  const form = document.getElementById("quoteForm");
  
    const fullnameVal = document.getElementById("fullname").value.trim();
    const phoneVal = document.getElementById("phone").value.trim();
    const emailVal = document.getElementById("email").value.trim();
    const fromVal = document.getElementById("from").value.trim();
    const toVal = document.getElementById("to").value.trim();
    const sizeVal = document.getElementById("size").value.trim();

    if (!fullnameVal || !phoneVal || !emailVal || !fromVal || !toVal || !sizeVal) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await db.collection("quoteForm").add({
        name: fullnameVal,
        phone: phoneVal,
        email: emailVal,
        from: fromVal,
        to: toVal,
        size: sizeVal,
        createdAt: new Date()
      });


    } catch (err) {
      console.error(err);
      alert("Error sending message");
    }
