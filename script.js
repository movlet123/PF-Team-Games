(function() {
  // ---------- РЕДАКТИРУЙТЕ ЭТОТ МАССИВ ----------
  const places = [
    {
      link: "https://www.roblox.com/games/98971668084244/Trolls-Cant-Slap-A-Tower-2",
      image: "logo/trolls2.png",
      title: "TROLLS CAN'T SLAP A TOWER 2"
    },
    {
      link: "https://www.roblox.com/games/97313985971036/Trolls-Cant-Slap-A-Tower",
      image: "logo/trolls.png",
      title: "TROLLS CAN'T SLAP A TOWER"
    },
    {
      link: "https://www.roblox.com/games/79853207819116/Trolls-Cant-Slap-A-Tower-3",
      image: "logo/trolls3.png",
      title: "TROLLS CAN'T SLAP A TOWER 3"
    },

  ];
  // --------------------------------------------

  const grid = document.getElementById('cardsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  if (places.length === 0) {
    grid.innerHTML = '<div class="loading-placeholder">➕ Добавьте плейсы в массив places (script.js)</div>';
    return;
  }

  places.forEach((place, idx) => {
    const card = document.createElement('a');
    card.className = 'game-card';
    card.href = place.link;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';

    // Вставляем современную разметку
    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${place.image}" alt="${place.title}" class="card-image"
             onerror="this.onerror=null; this.src='https://placehold.co/400x400/f4f5f7/858fa3?text=NO+IMAGE&font=montserrat';">
        <div class="play-overlay">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div class="card-info">
        <h3 class="card-title">${place.title}</h3>
      </div>
    `;

    // Плавное появление (оставляем твою логику, она отличная)
    card.style.opacity = '0';
    card.style.transform = 'translateY(15px)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    
    grid.appendChild(card);

    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      // После появления снимаем inline-transition для нормальной работы :hover в CSS
      setTimeout(() => card.style.transition = '', 400);
    }, idx * 70);
  });

  console.log('✅ PF TEAM games — сетка загружена.');
})();
