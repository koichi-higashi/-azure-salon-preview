window.AZURE_HERO_FIXED='';
window.AZURE_HERO_PARTS=[
  './assets/azure-approved-640-part0.txt?v=20260730-1018',
  './assets/azure-approved-640-part1.txt?v=20260730-1018',
  './assets/azure-approved-640-part2.txt?v=20260730-1018'
];

document.addEventListener('DOMContentLoaded', async () => {
  const hero = document.getElementById('hero');
  const copy = document.querySelector('.hero-copy');
  if (copy) copy.style.display = 'none';
  if (!hero) return;

  try {
    const responses = await Promise.all(
      window.AZURE_HERO_PARTS.map((url) => fetch(url, { cache: 'no-store' }))
    );
    if (responses.some((response) => !response.ok)) {
      throw new Error('Hero image parts could not be loaded');
    }
    const parts = await Promise.all(responses.map((response) => response.text()));
    hero.src = 'data:image/jpeg;base64,' + parts.join('').replace(/\s+/g, '');
  } catch (error) {
    console.error(error);
  }
});
