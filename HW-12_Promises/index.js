function getOneRandomChinese() {  
  return new Promise((resolve) => {
    setTimeout(() => {
      const dateNumbers = (Date.now()).toString();
      const lastDateNumbers = dateNumbers.slice(-5);
      
      resolve(String.fromCharCode(lastDateNumbers)); 
    }, 50) 
  })
}

async function getRandomChinese(length) {
  const signsArr = [];

  while(signsArr.length < length) {
    const chinese = await getOneRandomChinese();
    signsArr.push(chinese);
  }

  return signsArr.join('');
}

getRandomChinese(4).then(value => console.log(value));