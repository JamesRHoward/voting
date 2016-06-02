$(document).ready(function() {
  var age = parseInt(prompt("How old are you, really?"));
  if (age >= 18) {
    $("#adult").show();
} else {
    $("#minors").show();
  }
});
