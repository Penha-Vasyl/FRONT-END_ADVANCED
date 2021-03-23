const buttons = document.querySelectorAll('.instrument');

const keys = {
  KeyA: 'hi-hat',
  KeyS: 'ride',
  KeyD: 'cymbal',
  KeyF: 'kick',
  KeyG: 'snare',
  KeyH: 'tom',
}

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const instrumentName = button.dataset.instrument;
    const instrumentAudio = document.querySelector(`.${instrumentName}-audio`);

    playAudio(instrumentAudio);
    activateButton(button);    
  });
});

document.addEventListener('keydown', event => {
  const instrumentName = keys[event.code];

  if (!instrumentName) {
    return;
  }

  const instrumentAudio = document.querySelector(`.${instrumentName}-audio`);
  const button = document.querySelector(`[data-instrument="${instrumentName}"]`);
  
  playAudio(instrumentAudio);  
  activateButton(button);
});

function playAudio(audio) {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}

function activateButton(button) {
  button.classList.add('instrument-active');
  setTimeout(() => {
    button.classList.remove('instrument-active');
  }, 200);  
}