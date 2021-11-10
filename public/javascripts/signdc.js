
function myFunction() {
  var x = document.getElementById("mySelect").selectedIndex;
  var y = document.getElementsByTagName("option");
  $('#speciality').attr('value',y[x].text);
}
