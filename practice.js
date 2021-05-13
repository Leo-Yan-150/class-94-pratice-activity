var firebaseConfig = {
    apiKey: "AIzaSyCT-vcvhHBJYMivO8IepQxjPNPKKtiSTJ4",
    authDomain: "class-94-pratice-activity.firebaseapp.com",
    databaseURL: "https://class-94-pratice-activity-default-rtdb.firebaseio.com",
    projectId: "class-94-pratice-activity",
    storageBucket: "class-94-pratice-activity.appspot.com",
    messagingSenderId: "52587257237",
    appId: "1:52587257237:web:39cbe2f0fb225b93bdea9c"
  };
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser(){
username=document.getElementById("username").value;
firebase.database().ref("/").child(username).update({
purpose : "adding user"
});
}