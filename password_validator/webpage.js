

function validatePassword() {

  var x = document.getElementById("Password1")
  var y = document.getElementById("Password2")

  if(x.value != y.value){
    alert("Passwords Don't Match")
  }
  else if (y.value.length < 8){
    alert("Password Must Be Longer Than 7 Characters")
  }
  else{
    alert("Valid Password")
  }
};
