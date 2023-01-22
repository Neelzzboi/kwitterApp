var firebaseConfig = {
      apiKey: "AIzaSyAu0uI0FR-i7XB9QU0sEtnsMEG0pNebITs",
      authDomain: "kwitter-bf436.firebaseapp.com",
      databaseURL: "https://kwitter-bf436-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "kwitter-bf436",
      storageBucket: "kwitter-bf436.appspot.com",
      messagingSenderId: "755855183880",
      appId: "1:755855183880:web:603d628f8b565fb12c81bd",
      measurementId: "G-TJJTR0N3SD"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

     function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like: 0
      });
      document.getElementById("msg").value = "";

     }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
