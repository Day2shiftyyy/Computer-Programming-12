const imagesBrand = [
    "ovo.jpg",
    "lv.jpg",
    "versace.jpg",
    "dior.jpg",
    "ysl.jpg"
  ];

  const imagesRandom = [
    "art.jpg",
    "earth.jpg",
    "rocks.jpg",
    "rain.jpg",
    "train.jpg",
    "windows.jpg",
    "shinchan.jpg"
  ];
  
  const btn = document.getElementById("btn");
  
  btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundImage = `url('${imagesBrand[randomNumber]}')`;
  });
  
  function getRandomNumber() {
    return Math.floor(Math.random() * imagesBrand.length);
  }

  const btn1 = document.getElementById("btn-ran");
  
  btn1.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundImage = `url('${imagesRandom[randomNumber]}')`;
  });
  
  function getRandomNumber() {
    return Math.floor(Math.random() * imagesRandom.length);
  }
  
  