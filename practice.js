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
  function addUser(){
      username = document.getElementById("user_name").value
      firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
      });
  }