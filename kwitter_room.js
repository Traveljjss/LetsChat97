
var firebaseConfig = {
      apiKey: "AIzaSyCc456XEv6cU0tlEbAQVw6CKfFkbQZKScQ",
      authDomain: "kwitter-b57d9.firebaseapp.com",
      databaseURL: "https://kwitter-b57d9-default-rtdb.firebaseio.com",
      projectId: "kwitter-b57d9",
      storageBucket: "kwitter-b57d9.appspot.com",
      messagingSenderId: "114560972674",
      appId: "1:114560972674:web:a86a5d1b8b76aa08f3819b",
      measurementId: "G-5YX48YRES9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);     
    
    user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Welcome "+ user_name + " !";

function addRoom(){
      room_name = document.getElementById("room_name").value;
       
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}