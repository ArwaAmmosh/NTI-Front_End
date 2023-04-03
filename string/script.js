function spil() {
  let s = document.getElementById('st').value;
  let v = document.getElementById('va').value;
  document.getElementById('re').value = s.split(v);

}
function fi() {
  let s = document.getElementById('st').value;
  let v = document.getElementById('va').value;
  document.getElementById('re').value = s.indexOf(v);

}
function lio() {
  let s = document.getElementById('st').value;
  let v = document.getElementById('va').value;
  document.getElementById('re').value = s.lastIndexOf(v);

} function re() {
  let y = window.prompt("the value that will be in the place of value");
  let s = document.getElementById('st').value;
  let v = document.getElementById('va').value;
  s=s.replaceAll(v,y);
  document.getElementById('re').value = s;

}
function slxd() {
  let s = document.getElementById('st').value;
  // let v = document.getElementById('va').value;
  document.getElementById('re').value = s.toUpperCase;

}
function lei() {
  let s = document.getElementById('st').value;
  document.getElementById('re').value = s.length;

}