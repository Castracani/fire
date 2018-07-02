var email = $("#email").val("");
var username = $("#username").val("");
var password = $("#password").val("");

$(document).on("click", "#submit-btn", function(e) {
e.preventDefault();
  console.log(email);
  console.log(username);
  console.log(password);
  $("#email").val("");
  $("#username").val("");
  $("#password").val("");

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

});

$(document).on("click", "#login-btn", function(f) {
  firebase.auth().signInWithEmailAndPassword(email, password);
  $("#email").val("");
  $("#username").val("");
  $("#password").val("");
});

$(document).on("click", "#signout-btn", function(g) {
  firebase.auth().signOut();
  $("#email").val("");
  $("#username").val("");
  $("#password").val("");
});