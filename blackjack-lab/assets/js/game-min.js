import"../css/styles.css";import e from"underscore";let myModule=(()=>{"use strict";let t=[],r=["C","D","H","S"],l=["A","J","Q","K"],i=[],s,o=document.querySelector("#btnAsk"),n=document.querySelector("#btnStop"),d=document.querySelector("#btnNew"),c=document.querySelectorAll("small"),a=document.querySelectorAll(".divCards"),u=(e=2)=>{t=f(),i=Array(e).fill(0),c.forEach(e=>e.innerText=0),a.forEach(e=>e.innerHTML=""),o.disabled=!1,n.disabled=!1},f=()=>{t=[];for(let i=2;i<=10;i++)for(let s of r)t.push(i+s);for(let o of r)for(let n of l)t.push(n+o);return e.shuffle(t)},b=()=>{if(0===t.length)throw"No more cards in deck";return t.pop()},$=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:parseInt(t)},_=(e,t)=>(i[t]+=$(e),c[t].innerText=i[t],i[t]),h=(e,t)=>{let r=document.createElement("img");r.src=`../cartas/${e}.png`,r.classList.add("cards"),a[t].append(r)},p=()=>{let[e,t]=i;t===e?s="It's a tie":s="Computer wins"},m=e=>{let t;do{let r=b();if(t=_(r,i.length-1),h(r,i.length-1),e>21)break}while(t<e&&t<=21);return p(),s};return o.addEventListener("click",()=>{let e=b(),t=_(e,0);h(e,0),t>21?(o.disabled=!0,n.disabled=!0,Swal.fire({icon:"error",title:"You lost...",text:m(t)})):21===t&&(o.disabled=!0,n.disabled=!0,Swal.fire({title:"Good job!",text:"You win!",icon:"success"}))}),n.addEventListener("click",()=>{let[e]=i,t=m(e);Swal.fire({icon:"It's a tie"===t?"info":"error",title:"It's a tie"===t?"Nobody won":"You lost...",text:t}),o.disabled=!0,n.disabled=!0}),d.addEventListener("click",()=>{u()}),{newGame:u}})();