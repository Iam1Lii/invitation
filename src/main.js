import './style.css';
import { wedding } from './data/wedding.js';

const $=s=>document.querySelector(s),sleep=ms=>new Promise(r=>setTimeout(r,ms));
['lg1','lg2'].forEach(i=>$('#'+i).append($('#lt').content.cloneNode(true)));
$('#lg1').classList.add('mini');
let busy=false;
const bfSvg='<svg viewBox="-20 -16 40 32"><use class="wl" href="#bw" fill="url(#gf)"/><use class="wr" href="#bw" fill="url(#gf)" transform="scale(-1 1)"/></svg>';
function flutter(host,list){list.forEach(([x,y,s,d])=>{const e=document.createElement('div');e.className='bfl';e.style.cssText=`left:${x}%;top:${y}%;width:${s}px;animation-delay:${d}s`;e.innerHTML=bfSvg;host.append(e)})}
flutter($('#gate'),[[8,26,30,0],[80,38,38,-5],[16,70,26,-9],[72,74,32,-3]]);flutter($('#cover .sh'),[[10,22,32,-2],[82,30,38,-7],[20,78,28,-11],[74,82,34,-4]]);
async function openIt(){
 if(busy)return;busy=true;const S=$('#stage'),se=$('#seal'),fl=$('#flap'),cd=$('#card');
 $('#hint').style.opacity=0;$('#tap').classList.add('gone');$('#wrap').classList.add('stop');startMusic();
 await sleep(500);
 se.classList.add('press');await sleep(700);
 se.classList.remove('press');se.classList.add('lift');await sleep(1000);
 se.classList.add('away');await sleep(900);           // wax peels off
 fl.classList.add('open');await sleep(1800);$('.flapw').style.zIndex=1;await sleep(1700);
 cd.classList.add('out');await sleep(1200);
 S.classList.add('drop');await sleep(850);
 cd.classList.add('cam');await sleep(700);
 $('#fade').classList.add('on');await sleep(750);
 $('#gate').style.display='none';$('#cover').classList.add('show');$('#rest').classList.add('show');$('#rp').style.display='block';
 $('#lg2').classList.remove('play');void $('#lg2').offsetWidth;$('#lg2').classList.add('play');
 $('#fade').classList.remove('on');
}
function reset(){
 const S=$('#stage');S.classList.remove('drop');['seal','flap','card'].forEach(i=>$('#'+i).className=i==='seal'?'seal':i);
 $('#tap').classList.remove('gone');
 $('.flapw').style.zIndex=4;$('#wrap').classList.remove('stop');$('#hint').style.opacity=1;
 $('#gate').style.display='grid';$('#cover').classList.remove('show');$('#rest').classList.remove('show');$('#rp').style.display='none';busy=false;
}
$('#seal').addEventListener('click',openIt);$('#stage').addEventListener('click',openIt);$('#rp').addEventListener('click',reset);
const P=["/img/g00.jpg", "/img/g01.jpg", "/img/g02.jpg", "/img/g03.jpg", "/img/g04.jpg", "/img/g05.jpg", "/img/g06.jpg", "/img/g07.jpg", "/img/g08.jpg", "/img/g09.jpg", "/img/g10.jpg", "/img/g11.jpg", "/img/g12.jpg", "/img/g13.jpg", "/img/g14.jpg", "/img/g15.jpg", "/img/g16.jpg", "/img/g17.jpg", "/img/g18.jpg", "/img/g19.jpg", "/img/g20.jpg", "/img/g21.jpg", "/img/g22.jpg"];document.querySelectorAll('img[data-p]').forEach(i=>i.src=P[i.dataset.p]);
const G=[20,14,16,0,17,15,21,1,3,2,4,18,19,9,5,6,8,7,10,11,12,13,22];
const gl=$('#gl'),vw=$('#vw'),cols=[0,1].map(()=>{const c=document.createElement('div');c.className='gc';gl.append(c);return c});
const go=new IntersectionObserver(es=>es.filter(e=>e.isIntersecting).sort((a,b)=>a.target.dataset.n-b.target.dataset.n).forEach((e,i)=>{e.target.style.transitionDelay=i*150+'ms';e.target.classList.add('on');go.unobserve(e.target)}),{threshold:.12});
G.forEach((k,n)=>{const m=document.createElement('img');m.src=P[k];m.className='g';m.dataset.n=n;m.onclick=()=>openV(n);cols[n%2].append(m);go.observe(m)});
$('#cd').style.setProperty('--bg','url('+P[17]+')');$('#ty').style.setProperty('--bg','url('+P[19]+')');
// Full-screen viewer: swipe right-to-left for the next photo, tap X or the dark area to close
const vs=document.createElement('div');vs.className='vs';
vw.innerHTML='<button class="vx" aria-label="Close">✕</button><div class="vc"></div><button class="vp" aria-label="Previous">‹</button><button class="vn" aria-label="Next">›</button>';
vw.prepend(vs);
G.forEach(k=>{const s=document.createElement('div');s.className='sl';const i=document.createElement('img');i.src=P[k];i.draggable=false;i.alt='';s.append(i);vs.append(s)});
const cnt=vw.querySelector('.vc');let cur=0;
const upd=()=>{cur=Math.round(vs.scrollLeft/vs.clientWidth);cnt.textContent=(cur+1)+' / '+G.length};
vs.addEventListener('scroll',upd,{passive:true});
function openV(n){vw.classList.add('on');document.documentElement.style.overflow='hidden';vs.style.scrollBehavior='auto';vs.scrollLeft=n*vs.clientWidth;upd()}
function closeV(){vw.classList.remove('on');document.documentElement.style.overflow=''}
function step(d){vs.style.scrollBehavior='smooth';vs.scrollLeft=Math.max(0,Math.min(G.length-1,cur+d))*vs.clientWidth}
vw.querySelector('.vx').onclick=closeV;vw.querySelector('.vp').onclick=()=>step(-1);vw.querySelector('.vn').onclick=()=>step(1);
vs.onclick=e=>{if(e.target.tagName!=='IMG')closeV()};
addEventListener('keydown',e=>{if(!vw.classList.contains('on'))return;if(e.key==='Escape')closeV();if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)});
$('#lg3').append($('#lt').content.cloneNode(true));
const kn=n=>String(n).replace(/\d/g,d=>'០១២៣៤៥៦៧៨៩'[d]),T=new Date(wedding.dateISO);
setInterval(()=>{let t=Math.max(0,T-Date.now())/1000|0;$('#d').textContent=kn(t/86400|0);$('#hh').textContent=kn(t%86400/3600|0);$('#m').textContent=kn(t%3600/60|0);$('#s').textContent=kn(t%60)},1000);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in2');if(e.target.id==='ty'){e.target.querySelectorAll('.cd2 i').forEach((c,i)=>setTimeout(()=>c.classList.add('on'),400+i*450));$('#lg3').classList.add('play')}}}),{threshold:0,rootMargin:'0px 0px -12% 0px'});
document.querySelectorAll('.sec').forEach(s=>io.observe(s));
const po=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('on',e.isIntersecting)),{rootMargin:'-35% 0px -35% 0px'});document.querySelectorAll('.pg div').forEach(d=>po.observe(d));
addEventListener('scroll',()=>{const p=$('#pg'),r=p.getBoundingClientRect();p.style.setProperty('--p',Math.min(1,Math.max(0,(innerHeight*.6-r.top)/r.height)))},{passive:true});
const U=encodeURIComponent(location.href);$('#sh').onclick=e=>{const k=e.target.dataset.s;if(!k)return;const L={t:'https://t.me/share/url?url='+U,m:'https://www.facebook.com/dialog/send?link='+U+'&redirect_uri='+U,f:'https://www.facebook.com/sharer/sharer.php?u='+U};if(k==='c'){navigator.clipboard&&navigator.clipboard.writeText(location.href);e.target.textContent='បានចម្លង ✓'}else open(L[k],'_blank')};

$('#sq').onclick=async()=>{const bl=await (await fetch($('#qri').src)).blob(),f=new File([bl],'gift-qr.jpg',{type:'image/jpeg'});if(navigator.canShare&&navigator.canShare({files:[f]})){try{await navigator.share({files:[f]});return}catch(e){}}const a=document.createElement('a');a.href=URL.createObjectURL(bl);a.download='gift-qr.jpg';document.body.append(a);a.click();a.remove()};

function startMusic(){const au=$('#au'),mu=$('#mu');mu.style.display='block';mu.classList.remove('off');au.volume=0;au.play().then(()=>{let v=0;const t=setInterval(()=>{v=Math.min(.8,v+.04);au.volume=v;if(v>=.8)clearInterval(t)},120)}).catch(()=>mu.classList.add('off'))}
$('#mu').onclick=()=>{const au=$('#au'),mu=$('#mu');if(au.paused){au.volume=.8;au.play();mu.classList.remove('off')}else{au.pause();mu.classList.add('off')}};
document.addEventListener('visibilitychange',()=>{const au=$('#au');if(document.hidden)au.pause();else if(!$('#mu').classList.contains('off')&&$('#mu').style.display==='block')au.play().catch(()=>{})});

document.querySelectorAll('a[data-map]').forEach(a=>a.href=wedding.mapsUrl);
