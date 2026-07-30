window.AZURE_HERO_FIXED='https://raw.githubusercontent.com/koichi-higashi/-azure-salon-preview/d622081b65f43dcc6e14cb4a6ae55130ca0c6bd6/assets/hero-final.jpg';
window.AZURE_HERO_PARTS=[];

document.addEventListener('DOMContentLoaded',()=>{
  const hero=document.getElementById('hero');
  if(!hero)return;
  hero.src=window.AZURE_HERO_FIXED;
  hero.alt='AZURE 地中海リゾート';
});
