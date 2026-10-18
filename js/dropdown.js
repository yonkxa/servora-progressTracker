// DROPDOWN: custom select. Menus are built only when opened (keeps the page light and fast).
let DO={};
function dd(k,opts,val,fn,o={}){H[k]=fn;DO[k]=[opts,val];const cur=opts.find(x=>x[0]==val)||opts[0];
return `<div class="dd ${o.sm?'sm':''}" id="d_${k}"><button class="ddb ${o.cls?o.cls(val):''}" onclick="op(event,'${k}')">${o.lead||''}<span>${o.lab?o.lab(cur):cur[1]}</span>${I('chev','ch')}</button></div>`}
function op(e,k){e.stopPropagation();const was=document.querySelector('.ddm');cl();if(was&&was.dataset.k==k)return;
const d=document.getElementById('d_'+k),b=d.querySelector('.ddb').getBoundingClientRect(),m=document.createElement('div'),[opts,val]=DO[k];
m.className='ddm';m.dataset.k=k;m.innerHTML=opts.map(x=>`<div class="opt ${x[0]==val?'sel':''}" onclick="pk('${k}','${String(x[0]).replace(/'/g,'')}')">${x[2]||''}${x[1]}</div>`).join('');m.style.minWidth=Math.max(b.width,170)+'px';document.body.appendChild(m);
const h=m.offsetHeight;m.style.left=Math.max(8,Math.min(b.left,innerWidth-m.offsetWidth-8))+'px';m.style.top=(b.bottom+h+12>innerHeight&&b.top>h?b.top-h-6:b.bottom+6)+'px';d.classList.add('open')}
function cl(){document.querySelectorAll('.ddm').forEach(x=>x.remove());document.querySelectorAll('.dd.open').forEach(x=>x.classList.remove('open'))}
function pk(k,v){cl();H[k](v)}
document.addEventListener('click',cl);
addEventListener('scroll',e=>{if(document.querySelector('.ddm')&&!(e.target.closest&&e.target.closest('.ddm')))cl()},true);
const stO=()=>ST.map((s,k)=>[s[0],s[0],`<span class="pill s${k}" style="padding:2px 6px">${I(s[1])}</span>`]);
const stD=(k,v,fn)=>{const i=si(v);return dd(k,stO(),v,fn,{sm:1,cls:()=>'pill s'+i,lead:I(ST[i][1])})};
const obO=(all)=>[...(all?[[0,'All objectives']]:[]),...[1,2,3,4,5].map(n=>[n,`O${n} · ${OB[n]}`])];
