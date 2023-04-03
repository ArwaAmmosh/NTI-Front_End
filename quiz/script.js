var x;
function sta() {
  x = window.prompt("Enter Your name:")
}

function res() {
  var w = 0, r = 0;
  if (parseInt(document.getElementById("q1").value) == 2) {
    w += 1;
    document.getElementById("q1").style.borderColor = "green";
    document.getElementById("q1").style.color = "green";


  }
  else {
    r += 1;
    document.getElementById("q1").style.borderColor = "red";
    document.getElementById("q1").style.color = "red";

  }
  if (parseInt(document.getElementById("q2").value) == 20) {
    w += 1;
    document.getElementById("q2").style.borderColor = "green";
    document.getElementById("q2").style.color = "green";


  }
  else {
    r += 1;
    document.getElementById("q2").style.borderColor = "red";
    document.getElementById("q2").style.color = "red";

  }
  if (parseInt(document.getElementById("q3").value) == 2) {
    w += 1;
    document.getElementById("q3").style.borderColor = "green";
    document.getElementById("q3").style.colorolor = "green";


  }
  else {
    r += 1;
    document.getElementById("q3").style.borderColor = "red";
    document.getElementById("q3").style.color = "red";

  }
  if (parseInt(document.getElementById("q4").value) == 8) {
    w += 1;
    document.getElementById("q4").style.borderColor = "green";
    document.getElementById("q4").style.color = "green";



  }
  else {
    r++;
    document.getElementById("q4").style.borderColor = "red";
    document.getElementById("q4").style.color = "red";

  }
  if (parseInt(document.getElementById("q5").value) == 2) {
    w += 1;
    document.getElementById("q5").style.borderColor = "green";
    document.getElementById("q5").style.color = "green";



  }
  else {
    r += 1;
    document.getElementById("q5").style.borderColor = "red";
    document.getElementById("q5").style.color = "red";

  }
  if (parseInt(document.getElementById("q6").value) == 63) {
    w += 1;
    document.getElementById("q6").style.borderColor = "green";
    document.getElementById("q6").style.color = "green";



  }
  else {
    r += 1;
    document.getElementById("q6").style.borderColor = "red";
    document.getElementById("q6").style.color = "red";

  }
  if (parseInt(document.getElementById("q7").value) == 100) {
    w += 1;
    document.getElementById("q7").style.borderColor = "green";
    document.getElementById("q7").style.color = "green";



  }
  else {
    r += 1;
    document.getElementById("q7").style.borderColor = "red";
    document.getElementById("q7").style.color = "red";

  }
  if (parseInt(document.getElementById("q8").value) == 0) {
    w += 1;
    document.getElementById("q8").style.borderColor = "green";
    document.getElementById("q8").style.color = "green";



  }
  else {
    r += 1;
    document.getElementById("q8").style.borderColor = "red";
    document.getElementById("q8").style.color = "red";

  }
  if (parseInt(document.getElementById("q9").value) == 49) {
    w += 1;
    document.getElementById("q9").style.borderColor = "green";
    document.getElementById("q9").style.color = "green";

  }
  else {
    r += 1;
    document.getElementById("q9").style.borderColor = "red";
    document.getElementById("q9").style.color = "red";

  }
  if (parseInt(document.getElementById("q10").value) == 110) {
    w += 1;
    document.getElementById("q10").style.borderColor = "green";
    document.getElementById("q10").style.color = "green";
  }
  else {
    r += 1;
    document.getElementById("q10").style.borderColor = "red";
    document.getElementById("q10").style.color = "red";

  }

  if (document.getElementById("q11").value == 'flower') {
    w++;
    document.getElementById("q11").style.borderColor = "green";
    document.getElementById("q11").style.color = "green";


  }
  else {
    r += 1;
    document.getElementById("q11").style.borderColor = "red";
    document.getElementById("q11").style.color = "red";


  }
  window.alert("The name is : " + x + "  The number of Right Answers =" + w + " The number of Wrong Answers =" + r);

  //document.write("The name is : " + x);
  //document.write("<br>The number of Right Answers =" + w);
  //document.write("<br>The number of Wrong Answers =" + r);
  /*if(w==11){
      document.write("<br>The Grade: Exellent");
  }
  else if(w<11 && w>5){
      document.write("<br>The Grade: Very Good");
  }
  else if(w==5){
      document.write("<br>The Grade:Good");
  }
  else{
      document.write("<br>You fail ");
  }*/

}