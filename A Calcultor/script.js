function typel(x){
    document.getElementById('lab').value+=x;
   }
function cl(){
       document.getElementById('lab').value="";
      }
function opr(){
       document.getElementById('lab').value=eval(document.getElementById('lab').value);
      } 
function cle(){
        document.getElementById('lab').value=document.getElementById('lab').value.substring(0, document.getElementById('lab').value.length-1)
 }  
 function de(x){
    
    switch (x){
        case 1:
            document.getElementById('lab').value=Math.sin(document.getElementById('lab').value);
            break;
        case 2:
            document.getElementById('lab').value=Math.cos(document.getElementById('lab').value);
            break;
        case 3:
            document.getElementById('lab').value=Math.tan(document.getElementById('lab').value);
            break;
        case 4:
                document.getElementById('lab').value=Math.sinh(document.getElementById('lab').value);
                break;
        case 5:
            document.getElementById('lab').value=Math.cosh(document.getElementById('lab').value);
            break;
        case 6:
                document.getElementById('lab').value=Math.tanh(document.getElementById('lab').value);
                break;
        case 7:
             document.getElementById('lab').value=Math.pow(document.getElementById('lab').value,2);
                break;
        case 8:
            document.getElementById('lab').value=Math.sqrt(document.getElementById('lab').value);
            break;
        case 9:
                document.getElementById('lab').value=Math.log10(document.getElementById('lab').value);
          break;
        case 10:
            document.getElementById('lab').value=Math.abs(document.getElementById('lab').value);
          break;
                  
        case 11:
            document.getElementById('lab').value=Math.round(document.getElementById('lab').value);
          break;
                   
     
    }
 }