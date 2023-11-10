document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
  
    btn.addEventListener('click', () => {
      fetch('https://yesno.wtf/api')
        .then(response => response.json())
        .then(json => {
          const img = document.getElementById('img');
          img.src = json.image;
          const p = document.getElementById('p');
          p.textContent = json.answer;
        })
    });
  });