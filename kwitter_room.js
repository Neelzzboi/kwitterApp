
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
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


      function addRoom(){
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                  purpose:"adding room name"

            });
            localStorage.setItem("room_name",room_name);
            window.location = "kwitter_page.html";
      }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

