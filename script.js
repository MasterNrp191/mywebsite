cat > script.js << 'EOF'
/* live date/time and motivation rotation */
(function(){
  const timeEl = document.getElementById('live-time');
  const dateEl = document.getElementById('live-date');
  const yearEl = document.getElementById('year');
  const seasonNote = document.getElementById('season-note');
  const motBox = document.getElementById('motivationBox');
  const nextBtn = document.getElementById('nextMotivation');

  // Motivations - add as many as you want
  const motivations = [
    "Small steps every day beat big plans you never start.",
    "Practice, repeat, improve — you're getting better.",
    "Focus today: one thing. Master it.",
    "Mistakes are proof you're trying. Keep going.",
    "Proud moments come after the grind — you got this."
  ];

  let mIndex = 0;

  function updateDateTime(){
    const now = new Date();
    const d = now.toLocaleDateString();
    const t = now.toLocaleTimeString();
    dateEl.textContent = d;
    timeEl.textContent = t;
    yearEl.textContent = now.getFullYear();

    // Seasonal/merry christmas message for December
    if(now.getMonth() === 11){ // 0=Jan ... 11=Dec
      seasonNote.textContent = "Merry Christmas — rest, recharge, return stronger 🎄";
    } else {
      seasonNote.textContent = "Keep studying, keep improving.";
    }
  }

  function showMotivation(){
    motBox.textContent = motivations[mIndex];
    mIndex = (mIndex + 1) % motivations.length;
  }

  if(nextBtn) nextBtn.addEventListener('click', showMotivation);

  // auto rotate every 18 seconds
  setInterval(showMotivation, 18000);
  showMotivation();
  setInterval(updateDateTime, 1000);
  updateDateTime();
})();
EOF
