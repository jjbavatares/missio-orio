import { TRIALS } from './data.mjs';
import { Mission, REQUIRED_SUCCESSES } from './engine.mjs';
import { MissionAudio } from './audio.mjs';

const root = document.querySelector('#app');
const sound = new MissionAudio();
let mission = new Mission(TRIALS);
let feedback = '';
let values = [];
let endingSounds = [];
const e = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const image = (src, alt, className = '') => `<img src="./${src}" alt="${e(alt)}" class="${className}" decoding="async">`;
const branding = () => `<div class="jjb-branding">${image('assets/jjb-avatares.png','JJB Avatares amb IA')}</div>`;
const formatted = number => new Intl.NumberFormat('ca-ES').format(number);

function header() {
  return `<header class="masthead"><div class="brand"><span class="brand-badge" aria-hidden="true">O</span> MISSIÓ ORIÓ</div><span class="nav-note">Nombres naturals · 1r d’ESO</span><button class="sound" data-action="sound" aria-pressed="${!sound.enabled}">${sound.enabled ? 'Silenciar el so' : 'Activar el so'}</button></header>`;
}
function clockText() {
  const seconds = Math.ceil(mission.remainingMs / 1000);
  return `${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
}
function hud() {
  const segments = Array.from({length:12}, (_,i) => i < mission.correct ? 'correct' : i >= 12 - mission.failed ? 'failed' : 'pending');
  return `<section class="mission-hud" aria-label="Progrés de la missió"><div><div class="progress-top"><strong>${mission.correct} ${mission.correct === 1 ? 'encert' : 'encerts'} · ${mission.failed} ${mission.failed === 1 ? 'fallada' : 'fallades'}</strong><span class="progress-label">Objectiu: ${REQUIRED_SUCCESSES} encerts</span><span>${mission.outcomes.length}/12 proves</span></div><div class="progress-bar" role="img" aria-label="${mission.correct} proves correctes a l’esquerra, ${mission.failed} proves fallides a la dreta i ${12-mission.outcomes.length} pendents">${segments.map(s => `<span class="segment ${s}" aria-hidden="true"></span>`).join('')}</div></div><div class="clock ${mission.remainingMs <= 300000 ? 'urgent' : ''}"><span>Temps restant</span><strong id="clock" aria-live="off">${clockText()}</strong></div></section>`;
}
function footer() { return `<footer class="page-footer"><span>Missió Orió · Matemàtiques de 1r d’ESO</span><span>Calcula amb paper i llapis. Confia en el teu procediment.</span></footer>`; }

function home() {
  return `<main id="main" tabindex="-1" class="animate-in"><section class="hero"><div class="hero-copy"><p class="eyebrow">Una aventura de nombres naturals</p><h1>MISSIÓ ORIÓ<span>RETORN<br>A LA TERRA</span></h1><p>La nau està avariada. Els sistemes no responen. Els teus càlculs són l’única manera de tornar a casa.</p><div class="facts"><div class="fact"><strong>12</strong><span>proves espacials</span></div><div class="fact"><strong>45 min</strong><span>per completar la missió</span></div><div class="fact"><strong>8 encerts</strong><span>per aterrar amb èxit</span></div></div></div><div class="hero-art">${image('assets/cover.webp','Un coet de còmic sobrevola la Terra entre estrelles')}<span class="stamp">EL RETORN DEPÈN DE TU</span></div></section><section class="briefing" aria-label="Preparació abans de començar"><div><h3>PREPARA EL MATERIAL</h3><p>Tingues paper i llapis a punt. Treballaràs individualment i sense calculadora.</p></div><div><h3>VIGILA EL RELLOTGE</h3><p>La primera prova inicia els 45 minuts. El temps continua amb les pistes i les celebracions. Quan arriba a zero, la nau explota.</p></div><div><h3>NO ES DESA EL PROGRÉS</h3><p>Si tanques o recarregues la pàgina, hauràs de començar de nou. Encertar amb pistes també compta.</p></div></section><div class="start-row"><p>Primer descobriràs què ha passat. El rellotge encara no començarà.</p><button class="button" data-action="story">Començar</button></div>${branding()}</main>`;
}

const captions = [
  'La nau Orió torna d’una expedició. Tu ets qui comprova els càlculs de bord.',
  'Una pluja de micrometeorits colpeja la nau. Els sistemes automàtics deixen de funcionar!',
  'NORA, l’ordinador de bord, necessita els teus càlculs per recuperar els 12 sistemes.',
  'Resol les proves amb paper i llapis. Si t’equivoques, NORA et donarà dues pistes, una cada vegada.',
  'Un encert, amb pistes o sense, és verd. Tres errors mostren la solució i compten com una fallada vermella.',
  'Torna a la Terra! Amb 8 encerts de 12 podràs aterrar. Amb menys encerts, o si s’esgota el temps, la nau explotarà.'
];
function story() {
  return `<main id="main" tabindex="-1" class="animate-in"><div class="story-title"><div><p class="eyebrow">El que ha passat fins ara</p><h1>UNA MISSIÓ.<br>UNA OPORTUNITAT.</h1></div><p>Llegeix les vinyetes i prepara’t per ajudar NORA. El compte enrere encara no està en marxa.</p></div><section class="comic-grid" aria-label="Còmic de la missió">${captions.map((caption,i)=>`<article class="comic-panel"><div class="comic-scene" style="background-position:${(i%3)*50}% ${Math.floor(i/3)*100}%" role="img" aria-label="Vinyeta ${i+1} de l’aventura espacial"></div><span class="panel-num" aria-hidden="true">${i+1}</span><p class="comic-caption">${e(caption)}</p></article>`).join('')}</section><div class="story-rules"><p><strong>Els 45 minuts comencen amb la primera prova.</strong> El rellotge no s’atura amb els errors ni amb les pistes. La missió acaba després de les 12 proves o quan s’esgota el temps.</p><span class="eyebrow" style="margin:0;white-space:nowrap">8 de 12 per tornar</span></div><label class="ready"><input type="checkbox" id="ready"> Tinc paper i llapis preparats i sé que el progrés no es desa.</label><div class="story-button-row"><button class="button" data-action="start" disabled>Iniciar la primera prova</button></div></main>`;
}
function trial() {
  const t=mission.trial;
  const text = t.text.replace(/\n[ABC]\. /g,'\n\n');
  return `<main id="main" tabindex="-1" class="animate-in">${hud()}<div class="trial-heading"><div><p class="eyebrow">Prova ${t.n} de 12</p><h1>${e(t.title.toUpperCase())}</h1></div><span class="system">SISTEMA PENDENT</span></div><div class="trial-layout"><div><div class="trial-visual">${image(t.image,t.alt)}<span class="visual-tag">REPARACIÓ ${String(t.n).padStart(2,'0')}</span></div><div class="nora-strip"><span class="nora-mark">NORA</span><span>${e(t.story)}</span></div></div><div><section class="problem" aria-label="Problema matemàtic"><div class="problem-header"><h2>EL TEU REPTE</h2><span>PAPER I LLAPIS</span></div><p class="problem-text">${e(text)}</p><p class="practice">${e(t.work)}</p><form id="answer-form" novalidate>${t.inputs.map((field,i)=>`<div class="field"><label for="answer-${i}">${e(field.label)}</label><div class="answer-row"><input id="answer-${i}" name="answer-${i}" inputmode="numeric" autocomplete="off" autocorrect="off" spellcheck="false" aria-describedby="unit-${i}" value="${e(values[i]??'')}" placeholder="Escriu el resultat"><span id="unit-${i}" class="unit">${e(field.unit)}</span></div></div>`).join('')}${feedback === 'invalid' ? '<p class="invalid" role="alert">Completa tots els camps amb nombres naturals. Pots escriure 17900 o 17.900.</p>':''}<div class="form-footer"><span>Comprova els càlculs abans d’enviar-los.</span><button class="button" type="submit">Comprovar</button></div></form></section>${mission.attempts > 0 ? `<section class="feedback" role="alert"><h3>ENCARA NO ÉS CORRECTE</h3><p>${mission.attempts === 1 ? 'Revisa el procediment. NORA et dona la primera pista.' : 'Revisa els càlculs. NORA et dona la segona i última pista.'}</p><p class="hint"><strong>Pista 1.</strong> ${e(t.p1)}</p>${mission.attempts >=2 ? `<p class="hint"><strong>Pista 2.</strong> ${e(t.p2)}</p>`:''}<p>El rellotge continua. Pots tornar-ho a provar.</p></section>`:''}</div></div></main>`;
}
function victory() {
  const t=mission.trial;
  return `<main id="main" tabindex="-1" class="animate-in">${hud()}<section class="celebration"><div class="celebration-bg">${image('assets/victory.webp','La tripulació celebra la reparació d’un sistema de la nau')}</div><div class="celebration-copy"><p class="eyebrow">Prova ${t.n} completada</p><h1>SISTEMA<br>RECUPERAT!</h1><p>${e(t.unlock)}</p><div class="award">UN ENCERT MÉS · ${mission.correct}/12</div><p>${mission.attempts > 0 ? 'Has aprofitat les pistes i has resolt el repte. L’encert compta igual!' : 'Els teus càlculs són correctes. Bona feina!'}</p><button class="button cyan" data-action="next">${t.n === 12 ? 'Intentar l’aterratge' : 'Passar a la prova següent'}</button></div><div class="confetti" aria-hidden="true">${Array.from({length:22},(_,i)=>`<i style="left:${(i*17)%100}%;animation-delay:${(i%7)*.09}s"></i>`).join('')}</div></section></main>`;
}
function solution() {
  const t=mission.trial;
  return `<main id="main" tabindex="-1" class="animate-in">${hud()}<div class="trial-heading"><div><p class="eyebrow" style="color:var(--red)">Prova ${t.n} · Tres intents incorrectes</p><h1>NORA T’AJUDA A RESOLDRE</h1></div></div><div class="solution-layout"><div class="solution-art">${image(t.image,t.alt)}<span class="visual-tag">SOLUCIÓ DE BORD</span></div><section class="solution-copy"><h2>COM ES RESOL EL REPTE</h2><p class="solution-note">Aquesta prova compta com a fallida. Llegeix el procediment i comprova’l al paper abans de continuar.</p><ol>${t.solution.map(step=>`<li>${e(step)}</li>`).join('')}</ol><p><strong>Resultat${t.answers.length>1?'s':''}:</strong> ${t.answers.map((a,i)=>`${formatted(a)} ${e(t.inputs[i].unit)}`).join(' · ')}</p><button class="button" data-action="next">${t.n === 12 ? 'Intentar l’aterratge' : 'Passar a la prova següent'}</button></section></div></main>`;
}
function ending() {
  const win=mission.reason === 'success', timeout=mission.reason === 'timeout';
  return `<main id="main" tabindex="-1" class="animate-in"><div class="ending-scores"><span class="ok"><strong>${mission.correct}</strong> ${mission.correct === 1 ? 'encert' : 'encerts'}</span><span class="bad"><strong>${mission.failed}</strong> ${mission.failed === 1 ? 'fallada' : 'fallades'}</span>${timeout?`<span><strong>${12-mission.outcomes.length}</strong> proves pendents</span>`:''}</div><section class="outcome-art ${win?'success':'failure crash-flight'} ${timeout?'timeout':''}" aria-label="${win?'Animació de l’aterratge satisfactori':'Animació de l’explosió de la nau'}"><div class="outcome-bg">${image('assets/landing.webp','Una plataforma d’aterratge a la Terra')}</div>${image('assets/rocket-landed.webp','El coet Orió durant l’aterratge','landing-rocket')}${!win?image('assets/crash.webp','Una gran explosió de còmic a la plataforma','explosion-layer'):''}<div class="ending-title"><h1>${win?'MISSIÓ COMPLETADA!':'MISSIÓ FALLIDA'}</h1><p>${win?'La nau Orió ha aterrat. Has tornat a la Terra!':timeout?'El temps s’ha esgotat. La nau no ha pogut tornar a casa.':'La nau s’ha bolcat durant l’aterratge. Calien 8 encerts per tornar a casa.'}</p></div></section><div class="ending-controls"><p>${win?`Has resolt ${mission.correct} de les 12 proves. Els teus càlculs han fet possible el retorn.`:timeout?'Els 45 minuts han arribat a zero. Prepara de nou paper i llapis i torna a intentar la missió.':`Has resolt ${mission.correct} de les 12 proves. Revisa els procediments que t’han costat i torna-ho a provar.`}</p><button class="button" data-action="restart">${win?'Tornar a jugar':'Ho tornes a intentar?'}</button></div>${branding()}</main>`;
}

function render(focus = true) {
  const pages={home,story,trial,victory,solution,ending};
  root.innerHTML=`<div class="shell">${header()}${pages[mission.stage]()}${footer()}</div>`;
  if (focus) {
    document.querySelector('#main')?.focus({preventScroll:true});
    window.scrollTo({top:0,behavior:'instant'});
  }
  if (mission.stage==='trial') {
    const next=TRIALS[mission.index+1];
    if(next) { const preload=new Image(); preload.src='./'+next.image; }
  }
}
function beginEndingSound() {
  endingSounds.forEach(clearTimeout); endingSounds=[];
  if(mission.reason==='success') {
    sound.engine();
    endingSounds.push(setTimeout(()=>{if(mission.stage==='ending') sound.success(true);},4500));
  } else if(mission.reason==='timeout') sound.explosion();
  else {
    sound.engine();
    endingSounds.push(setTimeout(()=>{if(mission.stage==='ending') sound.explosion();},3400));
  }
}
root.addEventListener('change',event=>{
  if(event.target.id==='ready') document.querySelector('[data-action="start"]').disabled=!event.target.checked;
});
root.addEventListener('click',async event=>{
  const button=event.target.closest('[data-action]');
  if(!button || button.disabled) return;
  const action=button.dataset.action;
  if(action==='sound') {
    await sound.unlock(); sound.toggle();
    button.textContent=sound.enabled?'Silenciar el so':'Activar el so';
    button.setAttribute('aria-pressed',String(!sound.enabled));
    return;
  }
  if(action==='story') {
    await sound.unlock(); mission.story(); render();
  } else if(action==='start' && document.querySelector('#ready')?.checked) {
    await sound.unlock(); mission.start(); render();
  } else if(action==='next') {
    mission.next(); values=[];feedback='';render();
    if(mission.stage==='ending') beginEndingSound();
  } else if(action==='restart') {
    endingSounds.forEach(clearTimeout); endingSounds=[];sound.stop();
    mission=new Mission(TRIALS);values=[];feedback='';render();
  }
});
root.addEventListener('submit',event=>{
  if(event.target.id!=='answer-form') return;
  event.preventDefault();
  values=mission.trial.inputs.map((_,i)=>document.querySelector(`#answer-${i}`).value);
  const result=mission.submit(values);
  if(result==='ignored') return;
  feedback=result==='invalid'?'invalid':'';
  if(result==='hint' || result==='solution') values=[];
  if(result==='correct') sound.success();
  else if(result==='hint' || result==='solution') sound.error();
  render(result!=='hint' && result!=='invalid');
  if(result==='hint' || result==='invalid') {
    document.querySelector('input')?.focus({preventScroll:true});
    if(result==='hint') document.querySelector('.feedback')?.scrollIntoView({block:'nearest',behavior:'smooth'});
  }
  if(result==='timeout') beginEndingSound();
});
function updateTime() {
  if(mission.tick()) { render();beginEndingSound();return; }
  const clock=document.querySelector('#clock');
  if(clock) {
    clock.textContent=clockText();
    clock.parentElement.classList.toggle('urgent',mission.remainingMs<=300000);
  }
}
setInterval(updateTime,250);
document.addEventListener('visibilitychange',updateTime);
window.addEventListener('pageshow',event=>{
  if(event.persisted) {
    endingSounds.forEach(clearTimeout); sound.stop();mission=new Mission(TRIALS);values=[];feedback='';render();
  }
});
render(false);
