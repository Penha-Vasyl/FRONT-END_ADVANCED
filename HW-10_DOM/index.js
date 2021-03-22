function getRandomArray(length, min, max) {
  const result = Array(length).fill().map(() => Math.round(Math.random() * (max - min) + min));

  return result;
}

function generateBlocks() {
  const wrapper = document.createElement('div');
  
  wrapper.style.height = '250px';
  wrapper.style.width = '250px';
  
  document.body.appendChild(wrapper);

  for (let i = 0; i < 25; i++) {
    const block = document.createElement('div');

    block.classList.add('coloredBlock')
    block.style.float = 'left';
    block.style.background =  `rgb(${getRandomArray(3, 0, 255)})`;
    block.style.height = '50px';
    block.style.width = '50px';

    wrapper.appendChild(block);
  }
}

function generateBlocksInterval() {
  generateBlocks();
  const coloredBlocks = document.querySelectorAll('.coloredBlock');

  setInterval(() => {    
    coloredBlocks.forEach(block => (block.style.background = `rgb(${getRandomArray(3, 0, 255)})`));
  }, 1000);
}

