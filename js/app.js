// BOOT: DOM handles, dock auto-hide on scroll, first render
const sb=document.getElementById('sb'),m=document.getElementById('m'),sheet=document.getElementById('sheet');
sheet.addEventListener('click',e=>{if(e.target.closest('.tl'))document.body.classList.remove('so')});
let ly=0,tq=0;addEventListener('scroll',()=>{if(tq)return;tq=requestAnimationFrame(()=>{const y=scrollY,b=document.body.classList;if(y>ly+8&&y>140&&!b.contains('so'))b.add('dh');else if(y<ly-8||y<60)b.remove('dh');ly=y;tq=0})},{passive:true});
render();
try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist()}catch(e){}
