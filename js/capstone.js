// CAPSTONE: readiness checklists (UAT, paper, defense), Sprint Board page, Readiness page
const CAP=[
{name:'UAT scenarios',icon:'check',g:{
'O1 · Admin & Subscription':['Admin approves a pending branch registration','Admin suspends and reactivates a business','Owner subscribes to a plan and payment is validated','Admin creates an admin with limited permissions'],
'O2 · Spa Management':['Owner creates a second branch under one subscription','Manager schedules staff and records attendance','Owner adds services, packages and rooms','Owner creates a loyalty program and assigns it to a branch'],
'O3 · Client Mobile Reservation':['Client finds a nearby spa on the map','Client books a therapist and sees real-time availability','Client receives a booking notification','Client reschedules, cancels and leaves a review'],
'O4 · Service & Payment':['Walk-in gets a queue number at the front desk','System blocks a double booking for the same therapist','Therapist assigned, service started, extended, completed','Payment recorded, receipt issued, commission computed'],
'O5 · Reporting & Analytics':['Owner exports a sales report (PDF / Excel)','Commission report matches recorded payments','Admin views platform revenue and transactions','Report print preview opens correctly']}},
{name:'Paper & documentation',icon:'list',g:{
'Chapters':['Introduction, purpose and objectives polished','Scope and limitations reviewed','Related literature and systems matrix updated','Methodology: Agile sprints documented'],
'Diagrams & appendices':['Use case, activity and sequence diagrams match the final system','Database design and data dictionary updated','UI prototypes replaced with final screenshots','Calendar of activities updated']}},
{name:'Defense prep',icon:'flag',g:{
'Demo':['Demo story: owner, front officer and client end to end','Demo data seeded in all three roles','Backup screen recording of the demo'],
'Panel questions':['How double booking is prevented','How payments are validated (Xendit)','How roles and permissions are enforced (RBAC)','Why a multi-branch SaaS model','Limitations and future work']}}];
const sec=s=>{let t=0,d=0;Object.entries(s.g).forEach(([g,l])=>l.forEach(x=>{t++;if(ck[g+'|'+x])d++}));return[d,t]};
const ckAll=()=>CAP.reduce((a,s)=>{const c=sec(s);return[a[0]+c[0],a[1]+c[1]]},[0,0]);
const rdy=()=>{const c=ckAll();return Math.round((pct(()=>1)+c[0]/c[1]*100)/2)};
const tk=k=>{if(ck[k])delete ck[k];else ck[k]=1;saveC();render(1)};
function board(){const ro=[['all','All roles'],...ROLES.map(r=>[r.id,r.name.split(' (')[0]])],l=by(i=>(br=='all'||i.role==br)&&(!fo||i.obj==fo));
return head('kanban','Sprint Board','Move features between columns as your sprints progress. Filter by role or objective.')+`<div class="tool">${dd('br',ro,br,v=>{br=v;render(1)})}${dd('fo',obO(1),fo,v=>{fo=+v;render(1)})}</div><div class="bd">${ST.map((s,k)=>{const c=l.filter(i=>i.status==s[0]);return `<div class="col"><div class="ch2 s${k}">${I(s[1])}${s[0]}<em>${c.length}</em></div>${c.map(i=>`<div class="kc"><b>${E(i.name)}</b><small>${E(ROLES.find(r=>r.id==i.role).name.split(' (')[0])} · O${i.obj}</small>${stD('k'+i.id,i.status,v=>upd(i.id,'status',v,1))}</div>`).join('')||'<div class="empty">Nothing here</div>'}</div>`}).join('')}</div>`}
function ready(){const c=ckAll(),p=Math.round(c[0]/c[1]*100);
return head('flag','Capstone Readiness','Beyond features: test scenarios per objective, paper updates and defense prep. Tick items as you finish them.')+`<div class="g"><div class="card c5"><h3>${I('check')}Checklist progress</h3>${gauge(p)}</div><div class="card c7"><h3>${I('list')}Sections</h3>${CAP.map(s=>{const a=sec(s);return `<div class="row"><span class="lb">${s.name}</span><div class="bar"><i style="width:${a[0]/a[1]*100}%;background:var(--ac)"></i></div><span class="pc">${a[0]}/${a[1]}</span></div>`}).join('')}<p class="mut" style="margin:12px 0 0;font-size:13px">Overall readiness (features + checklist): <b>${rdy()}%</b></p></div></div><div class="gg">${CAP.map(s=>Object.entries(s.g).map(([g,l])=>`<div class="gc"><div class="gh">${I(s.icon)}${s.name.split(' ')[0]} · ${g}</div>${l.map(x=>{const k=g+'|'+x;return `<button class="ckb ${ck[k]?'on':''}" data-k="${E(k)}" onclick="tk(this.dataset.k)"><span class="bx">${I('tick')}</span>${E(x)}</button>`}).join('')}</div>`).join('')).join('')}</div>`}
