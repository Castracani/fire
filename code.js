

$(document).ready(function () {

  var user = firebase.auth().currentUser;

  //firebase.auth().onAuthStateChanged(function (user) {
    //var user = firebase.auth().currentUser;
    //var name, email, photoUrl, uid, emailVerified;


    if (user) {
      // User is signed in.
      console.log("There's a user signed in!");
      $("#logged-in").css("display", "inline-block");
      $("#not-logged-in").css("display", "none");

      if (user != null) {
        var emailID = user.email;
        $("#welcome-text").text(" Happy to have you here, " + emailID + "!");
        name = user.displayName;
        email = user.email;
        emailVerified = user.emailVerified;
        uid = user.uid;
        console.log(name, email, emailVerified, uid);                           
      }
    } else {
      // No user is signed in.
      console.log("Nobody's here!");
      $("#logged-in").css("display", "none");
      $("#not-logged-in").css("display", "inline-block");
      $("#welcome-text").empty();
    }
  });

  $("#submit-btn").click(function (user) {
    var email = $("#email").val().trim();
    var username = $("#username").val().trim();
    var password = $("#password").val().trim();
    $("#email").val("");
    $("#username").val("");
    $("#password").val("");
    if (user != null) {
      firebase.auth().signOut();
    }
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function () {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase.auth().createUserWithEmailAndPassword(email, password);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
      });
  });

  $("#login-btn").click(function (user) {
    var user = firebase.auth().currentUser;
    var email = $("#email").val().trim();
    var username = $("#username").val().trim();
    var password = $("#password").val().trim();
    $("#email").val("");
    $("#username").val("");
    $("#password").val("");
    if (user != null) {
      console.log("Hi!");
      window.alert("You are already signed into an account. Please sign out before attempting to log into a different account.");
    } else {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function () {
          // Existing and future Auth states are now persisted in the current
          // session only. Closing the window would clear any existing state even
          // if a user forgets to sign out.
          // ...
          // New sign-in will be persisted with session persistence.
          return firebase.auth().signInWithEmailAndPassword(email, password);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorMessage = error.message;
          window.alert("Error: " + errorMessage);
        });
    }
  });

  $("#signout-btn").click(function () {
    firebase.auth().signOut();
  })


  //very last brackets (Document Ready) below here!  
});