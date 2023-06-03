const cards = document.querySelectorAll('.card');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const colorOverlay = document.querySelector('.color-overlay');
let currentCard = 0;



function updateCards() {
    cards.forEach((card, index) => {
      if (index === currentCard) {
        card.style.transform = 'translateX(0)';
      } else {
        card.style.transform = `translateX(${index < currentCard ? '-200%' : '200%'})`;
      }
    });
  }
  
  

function changeBackgroundColor() {
  const hue = Math.floor(Math.random() * 360);
  colorOverlay.style.backgroundColor = `hsla(${hue}, 50%, 50%, 0.4)`;
}

leftArrow.addEventListener('click', () => {
  if (currentCard > 0) {
    currentCard--;
    updateCards();
    changeBackgroundColor();
  }
});

rightArrow.addEventListener('click', () => {
  if (currentCard < cards.length - 1) {
    currentCard++;
    updateCards();
    changeBackgroundColor();
  }
});

updateCards();
