function cal() {

    let s1 = parseFloat(document.getElementById('s1').value);
    let h1 = parseInt(document.getElementById('h1').value);
    let s2 = parseFloat(document.getElementById('s2').value);
    let h2 = parseInt(document.getElementById('h2').value);
    let s3 = parseFloat(document.getElementById('s3').value);
    let h3 = parseInt(document.getElementById('h3').value);
    let s4 = parseFloat(document.getElementById('s4').value);
    let h4 = parseInt(document.getElementById('h4').value);
    let s5 = parseFloat(document.getElementById('s5').value);
    let h5 = parseInt(document.getElementById('h5').value);
    let s6 = parseFloat(document.getElementById('s6').value);
    let h6 = parseInt(document.getElementById('h6').value);
    let s7 = parseFloat(document.getElementById('s7').value);
    let h7 = parseInt(document.getElementById('h7').value);
    let Gpa = (s1 * h1 + s2 * h2 + s3 * h3 + s4 * h4 + s5 * h5 + s6 * h6 + s7 * h7) / (h1 + h2 + h3 + h4 + h5 + h6 + h7);
    if (Gpa < 1.5) {
        document.getElementById('GPA').innerHTML = "your GPA is " + Gpa + "<br>*For sorry you fail ";
        document.getElementById('GPA').style.border = "solid rgb(220, 105, 105)";
    }
    if (Gpa >= 1.5) {
        document.getElementById('GPA').innerHTML = "your GPA is " + Gpa + "<br>*congratiolations for your sucess ";
        document.getElementById('GPA').style.border = "solid rgb(108, 220, 108)";
        document.getElementById('GPA').style.height ="90px";

    }

}