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

         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4>"+name+"<img class = 'user_tick' src = 'tick.png'></h4>";
         message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>";
         like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick = 'updateLike(this.id)'>";
         span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>"+like+"</span> </button> <hr>";
         
         row = name_with_tag + message_with_tag + like_button + span-with_tag;
         document.getElementById("output").innerHTML+=row;
         
         
      } });  }); }
getData();

function updateLike(message_id){
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_Likes = Number(likes) + 1;
      console.log(updated_Likes);
       
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_Likes

      });
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}

