function typel(x){
 document.getElementById('lab').value+=x;
}
function cl(){
    document.getElementById('lab').value="";
   }
function opr(){
    document.getElementById('lab').value=eval(document.getElementById('lab').value);
   }   