/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the carousel slide in and out, or fade. It's up to you!
    6. Have fun!
axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(data => {
    // const articleData = Object.entries(data.data.articles);
    // const categories = Object.keys(data.data.articles);
    const articleData = Object.entries(data.data.articles);
    const categories = Object.keys(data.data.articles);

    console.log("index.js -> %carticleData:", "color: blue", articleData);
    console.log("index.js -> %ccategories:", "color: green", categories);

    categories.forEach(cat => {
      articleData.forEach(article => {
        if (articleData[0][0] == cat) {
          makecarousel(article);
        }
      });
    });
  })

  .catch(error => {
    console.log("index.js -> %c\"There's a data issue:", "color: red", error);
  });
  


*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>

  
*/

const pictures = [
 { computer:`../../assets/carousel/computer.jpeg`},
{ mountains: `../../assets/carousel/computer.jpeg`},
{ trees:`../../assets/carousel/trees.jpeg`},
 { turnTable: `../../assets/carousel/turnTable.jpeg`}
]




// images.forEach(cat => {
//   articleData.forEach(article => {
//     if (articleData[0][0] == cat) {
//       makeCards(article);
//     }
//   });
makeCarousel(pictures)
console.log('Carousel.js -> %cpictures:', 'color: deepPink', pictures)





  

function makeCarousel(data) {
  const carousel = document.createElement("div");
  const leftButton = document.createElement("button");
  let img = document.createElement("img");
  const rightButton = document.createElement("button");

  const insertCarousel = document.querySelector(".carousel-container");

  insertCarousel.appendChild(carousel);
  carousel.appendChild(leftButton);
  carousel.appendChild(img);
  carousel.appendChild(rightButton);
  

  leftButton.classList.add("left-button");
 
  img.classList.add("images") 
  rightButton.classList.add("right-button");


  
  
  rightButton.src = `../../assets/carousel/rightArrow.png`
  leftButton.src = `../../assets/carousel/rightArrow.png`

    
    data.forEach(item => populate(item))


  function populate(data) {
  console.log('index.js -> %cdata:', 'color: indigo', data)
 

{data = Object.values(data);
  img.src = data
}
  

function carouselMechanics(data) {


  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
}))
}

}
}