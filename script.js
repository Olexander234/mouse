var h =document.querySelector('h1');
var p= h.getBoundingClientRect();
var c= document.querySelector('.cursor');

document.body.onmousemove = function(e) {
  /*Adjust the cursor position*/
  c.style.left=e.clientX+'px';
  c.style.top=e.clientY+'px';
  /*Adjust the clip-path*/
  h.style.setProperty('--x',(e.clientX-p.top)+'px');
  h.style.setProperty('--y',(e.clientY-p.left)+'px');
}