// UI HELPERS: progress bar, completion gauge, status tiles
const bar=f=>{const t=cnt(f)||1;return `<div class="bar">${ST.map((s,k)=>`<i style="width:${cnt(f,s[0])/t*100}%;background:${COL[k]}"></i>`).join('')}</div>`};
const pct=f=>Math.round(cnt(f,'Done')/(cnt(f)||1)*100);
const gauge=p=>`<div class="gauge"><svg viewBox="0 0 200 110" width="100%" style="max-width:240px"><defs><linearGradient id="gg"><stop offset="0" stop-color="#7c4dff"/><stop offset="1" stop-color="#d946ef"/></linearGradient></defs><path d="M12 100A88 88 0 0 1 188 100" fill="none" stroke="var(--soft)" stroke-width="16" stroke-linecap="round"/><path d="M12 100A88 88 0 0 1 188 100" fill="none" stroke="url(#gg)" stroke-width="16" stroke-linecap="round" stroke-dasharray="${p/100*276.5} 277" style="transition:stroke-dasharray .8s"/></svg><b>${p}%</b><small>completed</small></div>`;
const tiles=f=>ST.map((s,k)=>`<div class="lr t${k}">${I(s[1])}<span>${s[0]}</span><b>${cnt(f,s[0])}</b></div>`).join('');
const prog=f=>`<div class="pg">${gauge(pct(f))}<div class="leg">${tiles(f)}</div></div>`;
