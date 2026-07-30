window.AZURE_HERO_FIXED='./assets/hero-final.jpg?v=20260730-1400';
window.AZURE_HERO_PARTS=[];

document.addEventListener('DOMContentLoaded',()=>{
  const hero=document.getElementById('hero');
  if(!hero)return;
  hero.src=window.AZURE_HERO_FIXED;
  hero.alt='AZURE 地中海リゾート';
});
