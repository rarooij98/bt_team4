console.log('js is working');

const shareData = {
    title: 'School Match',
    text: 'Help je een match te vinden met een leuke school',
    url: 'http://pacific-taiga-01066.herokuapp.com/'
  }

  const btn = document.querySelector('button');
  const resultPara = document.querySelector('.result');

  // web share op de button on click
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
      resultPara.textContent = 'Deel de school match app'
    } catch(err) {
      resultPara.textContent = 'Error: ' + err
      console.log('browser support geen Web Share API')
      //google chrome support het niet volledig. Probeer in Safari
    
    }
  });
