const firebaseConfig = {
      apiKey: "AIzaSyCwNkJXf6VP3woQB9Ogelwv6yWYx88LD-s",
      authDomain: "let-s-chat-aac30.firebaseapp.com",
      databaseURL: "https://let-s-chat-aac30-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-aac30",
      storageBucket: "let-s-chat-aac30.appspot.com",
      messagingSenderId: "554308479056",
      appId: "1:554308479056:web:5c769d63ece82f5167c955",
      measurementId: "G-746NYC73JT"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}