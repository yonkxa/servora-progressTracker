// NAVIGATION: sidebar / bottom dock (built once, then updated in place so CSS animations can play), page switch, theme, export, reset
const NI={board:'kanban',ready:'flag',home:'home',obj:'target',sys:'shield',own:'crown',mgr:'compass',fo:'desk',cl:'phone'};
let lastV='';
const short=r=>r.name.split(' (')[0],rc=r=>cnt(i=>i.role==r.id,'Done')+'/'+cnt(i=>i.role==r.id);
function build(){const n=(v,l,x='')=>`<button class="nv ${x}" data-v="${v}" onclick="go('${v}')" title="${l}">${I(NI[v])}<span>${l}</span>${x=='r'?'<em></em>':''}</button>`;
sb.innerHTML=`<div class="brand" onclick="sb.classList.toggle('ex')"><div class="lg">${I('layers')}</div><span>Servora</span></div>${n('home','Overview')}${n('obj','Objectives')}${n('board','Board')}${n('ready','Readiness')}<div class="sec"><span>ROLES</span></div>${ROLES.map(r=>n(r.id,short(r),'r')).join('')}<div class="sec"><span>WORKSPACE</span></div><button class="nv w" onclick="tgl()">${I('moon')}<span>Theme</span></button><button class="nv w" onclick="exp()">${I('down')}<span>Export JSON</span></button><button class="nv w" onclick="rst()">${I('refresh')}<span>Reset defaults</span></button><button class="nv mo" onclick="document.body.classList.toggle('so')">${I('more')}<span>More</span></button>`}
function side(){if(!sb.firstChild)build();
sb.querySelectorAll('.nv[data-v]').forEach(b=>{const on=b.dataset.v==view;if(on!=b.classList.contains('on')){b.classList.toggle('on',on);if(on&&lastV!=view){b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop')}}
if(b.classList.contains('r'))b.querySelector('em').textContent=rc(ROLES.find(r=>r.id==b.dataset.v))});
sb.querySelector('.mo').classList.toggle('on',ROLES.some(r=>r.id==view));lastV=view;
const tl=r=>{const d=cnt(i=>i.role==r.id,'Done'),t=cnt(i=>i.role==r.id);return `<button class="tl ${view==r.id?'on':''}" onclick="go('${r.id}')"><span class="ti">${I(NI[r.id])}</span><b>${short(r)}</b><small>${d}/${t} done</small><i style="width:${Math.round(d/t*100)}%"></i></button>`};
sheet.innerHTML=`<div class="grab"></div><div class="sec2">Roles</div><div class="rl">${ROLES.map(tl).join('')}</div><div class="sec2">Workspace</div><div class="wl"><button class="tl s" onclick="tgl()">${I('moon')}Theme</button><button class="tl s" onclick="exp()">${I('down')}Export</button><button class="tl s" onclick="rst()">${I('refresh')}Reset</button></div><p class="bld">Build ${BUILD}<br>Opened as: ${(navigator.standalone||matchMedia('(display-mode: standalone)').matches)?'home-screen app':'Safari browser tab'}</p>`}
function go(v){view=v;q='';fs='All';fo=0;br='all';F={g:'Custom',o:2,s:'Lacking'};document.body.classList.remove('so','dh');render();scrollTo(0,0)}
function tgl(){const d=document.documentElement,theme=d.dataset.theme=='dark'?'light':'dark';d.dataset.theme=theme;tcSet();try{localStorage.setItem(SK+'t',theme)}catch(e){}}
function exp(){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(it,null,2)],{type:'application/json'}));a.download='servora-tracker.json';a.click()}
function rst(){if(confirm('Reset to the default list? Your edits will be lost.')){it=seed();ck={};save();saveC();render()}}
