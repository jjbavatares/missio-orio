import assert from 'node:assert/strict';
import { Mission, parseNatural, DURATION_MS } from './engine.mjs';
import { TRIALS } from './data.mjs';

let checks=0;
function test(name,fn){fn();checks++;console.log('✓ '+name);}
function setup(){let time=1000;const m=new Mission(TRIALS,()=>time);m.story();m.start();return{m,advance:n=>time+=n};}
const answers=t=>t.answers.map(String);

test('Els 12 resultats matemàtics són correctes',()=>{
  const expected=[4876+3958+6247+2819,20040-8765,1248*24,8640/8,7638+4857+6924+3576+5809,30002-18746,2364*128,57960/24,[1248*12,25000-1248*12],[Math.floor(48765/125),48765%125],48*25-360/12,[6850+4975+8260+3915,24000-7648,(24000-7648)/16]];
  expected.forEach((n,i)=>assert.deepEqual(TRIALS[i].answers,Array.isArray(n)?n:[n]));
});
test('Accepta enters i separadors de milers, però rebutja decimals i notació exponencial',()=>{
  for(const text of ['17900','17.900','17 900','17\u202f900']) assert.equal(parseNatural(text),17900);
  for(const text of ['','-1','17,9','17.9','1e3','0x10','1..000','Infinity','1.24.000']) assert.equal(parseNatural(text),null);
  assert.equal(parseNatural('0'),0);
});
test('El rellotge comença amb la primera prova, amb 45 minuts',()=>{
  let time=0;const m=new Mission(TRIALS,()=>time);time+=900000;m.story();assert.equal(m.deadline,null);m.start();assert.equal(m.remainingMs,DURATION_MS);
});
test('Primer error pista 1, segon error pista 2, tercer error solució i una fallada',()=>{
  const {m}=setup();assert.equal(m.submit(['1']),'hint');assert.equal(m.attempts,1);assert.equal(m.outcomes.length,0);
  assert.equal(m.submit(['2']),'hint');assert.equal(m.attempts,2);
  assert.equal(m.submit(['3']),'solution');assert.equal(m.stage,'solution');assert.equal(m.failed,1);
  assert.equal(m.submit(['4']),'ignored');assert.equal(m.failed,1);m.next();assert.equal(m.index,1);assert.equal(m.attempts,0);
});
test('Un encert després de dues pistes compta com a correcte',()=>{
  const {m}=setup();m.submit(['1']);m.submit(['1']);assert.equal(m.submit(answers(m.trial)),'correct');assert.equal(m.correct,1);assert.equal(m.failed,0);
});
test('Els camps buits o mal formats no gasten intents',()=>{
  const {m}=setup();assert.equal(m.submit(['']),'invalid');assert.equal(m.attempts,0);
});
test('Una prova de dos camps és una sola prova i exigeix tots dos resultats',()=>{
  const {m}=setup();for(let i=0;i<8;i++){m.submit(answers(m.trial));m.next();}
  assert.equal(m.submit(['14976','1']),'hint');assert.equal(m.outcomes.length,8);
  assert.equal(m.submit(['14976','10024']),'correct');assert.equal(m.outcomes.length,9);
});
test('8 encerts i 4 fallades permeten aterrar',()=>{
  const {m}=setup();for(let i=0;i<12;i++){if(i<8)m.submit(answers(m.trial));else{const wrong=m.trial.answers.map(()=> '0');m.submit(wrong);m.submit(wrong);m.submit(wrong);}m.next();}
  assert.equal(m.correct,8);assert.equal(m.failed,4);assert.equal(m.reason,'success');
});
test('7 encerts i 5 fallades provoquen el final fallit després de les 12 proves',()=>{
  const {m}=setup();for(let i=0;i<12;i++){if(i<7)m.submit(answers(m.trial));else{const wrong=m.trial.answers.map(()=> '0');m.submit(wrong);m.submit(wrong);m.submit(wrong);}m.next();}
  assert.equal(m.correct,7);assert.equal(m.failed,5);assert.equal(m.reason,'score');
});
test('El temps s’esgota també durant una celebració o una solució',()=>{
  for(const result of ['victory','solution']){const {m,advance}=setup();if(result==='victory')m.submit(answers(m.trial));else{m.submit(['1']);m.submit(['1']);m.submit(['1']);}advance(DURATION_MS);assert.equal(m.tick(),true);assert.equal(m.reason,'timeout');}
});
test('Una resposta correcta en el temps límit no evita la fallada per temps',()=>{
  const {m,advance}=setup();advance(DURATION_MS);assert.equal(m.submit(answers(m.trial)),'timeout');assert.equal(m.correct,0);
});
test('Els períodes sense actualitzar el navegador també consumeixen temps',()=>{
  const {m,advance}=setup();advance(DURATION_MS+60000);assert.equal(m.tick(),true);assert.equal(m.remainingMs,0);
});
test('Una sessió nova no conserva progrés ni intents',()=>{
  const {m}=setup();m.submit(answers(m.trial));m.next();const fresh=new Mission(TRIALS);assert.equal(fresh.stage,'home');assert.equal(fresh.correct,0);assert.equal(fresh.deadline,null);
});
console.log(`${checks} comprovacions superades.`);
