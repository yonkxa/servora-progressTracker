// STATE: storage key, objective mapping, seeding, app state, localStorage save, small helpers
const BUILD='v8 · 19 Oct 2026 · see-through status bar';
const SK='servora-tracker-v3';
const oOf=(r,g)=>r=='cl'?3:r=='sys'?(g=='Dashboard & Reports'?5:1):g=='Dashboard & Analytics'?5:(r=='own'&&/Onboarding|Subscription/.test(g))?1:(g=='Operations & Money'||g=='Billing'||(r!='own'&&/Appointments|Booking|Service Flow|Billing/.test(g)))?4:2;
const uid=()=>Math.random().toString(36).slice(2,9);
const seed=()=>{const a=[];ROLES.forEach(r=>Object.entries(r.g).forEach(([g,l])=>l.forEach(t=>{let s=0;if(t[0]=='!'){s=2;t=t.slice(1)}else if(t[0]=='?'){s=3;t=t.slice(1)}
const n=/payroll/i.test(t)?'Payroll is out of scope in the study docs.':/face scan/i.test(t)?'Docs list biometric auth as out of scope. Confirm.':'';
a.push({id:uid(),role:r.id,group:g,name:t,status:ST[s][0],obj:oOf(r.id,g),note:n})})));return a};
let it=[],view='home',q='',fs='All',fo=0,theme='',F={g:'Custom',o:2,s:'Lacking'},H={};
try{it=JSON.parse(localStorage.getItem(SK)||'[]');theme=localStorage.getItem(SK+'t')||''}catch(e){}
if(!it.length)it=seed();if(theme)document.documentElement.dataset.theme=theme;
const save=()=>{try{localStorage.setItem(SK,JSON.stringify(it))}catch(e){}};
const E=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const si=s=>ST.findIndex(x=>x[0]==s);
const by=(f)=>it.filter(f);
const cnt=(f,s)=>by(i=>f(i)&&(!s||i.status==s)).length;
const COL=['#16a36a','#2f7fd6','#e5484d','#9a5bd6'];
let br='all',ck={};try{ck=JSON.parse(localStorage.getItem(SK+'c')||'{}')}catch(e){}
const saveC=()=>{try{localStorage.setItem(SK+'c',JSON.stringify(ck))}catch(e){}};
