
const initiateClock = function() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hour = now.getHours();
  const hands = [
    {
      hand: document.querySelector('.hr-cont'),
      degree: (hour * 30) + (mins / 2)
    },
    {
      hand: document.querySelector('.min-cont'),
      degree: mins * 6
    },
    {
      hand: document.querySelector('.sec-cont'),
      degree: seconds * 6 + 6
    }
  ];

  for (let i = 0; i < hands.length; i++) {
   hands[i].hand.style.transform = `rotate(${hands[i].degree}deg)`;
  }
  
  if (seconds == 0) { 
    hands[2].hand.style.transitionDuration = '0s';
    hands[1].hand.style.transitionDuration = '0s';
  } else { 
   	hands[2].hand.style.transitionDuration = '0.05s';
  }
};
setInterval(initiateClock, 1000)
initiateClock();