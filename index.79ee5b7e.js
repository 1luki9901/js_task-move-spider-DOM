document.addEventListener("click",function(t){});var t=document.getElementById("spider"),e=document.getElementById("wall");document.addEventListener("click",function(n){var i=e.getBoundingClientRect(),c=t.getBoundingClientRect(),o=n.clientX-c.width/2,d=n.clientY-c.height/2;o<i.left?o=i.left:o+c.width>i.right&&(o=i.right-c.width),d<i.top?d=i.top:d+c.height>i.bottom&&(d=i.bottom-c.height),t.style.left="".concat(o,"px"),t.style.top="".concat(d,"px")});
//# sourceMappingURL=index.79ee5b7e.js.map
