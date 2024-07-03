let games = [
  {
    name: "Grand Theft Auto V",
    des:
      "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. The story of three uniquely-different criminals as they commit daring and profitable heists across the sprawling city of Los Santos. Michael is an ex-con whose past catches up to him when previous crime partner Trevor starts making a name for himself as a drug-lord of Sandy Shores.",
    image: "Games/GTA V.webp"
  },
  {
    name: "Minecraft",
    des:
      "Minecraft is a video game in which players create and break apart various kinds of blocks in three-dimensional worlds. The game's two main modes are Survival and Creative. In Survival, players must find their own building supplies and food. They also interact with blocklike mobs, or moving creatures.",
    image: "Games/Minecraft.webp"
  },
  {
    name: "Valorant",
    des:
      "Valorant is a free to play first person hero shooter developed and published by Riot Games, for Microsoft Windows. First teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by an official release on June 2, 2020. The development of the game started in 2014. Valorant takes inspiration from the Counter-Strike series of tactical shooters, borrowing several mechanics such as the buy menu, spray patterns, and inaccuracy while moving.",
    image: "Games/Valorant Slider.webp"
  },
  {
    name: "NBA 2K21",
    des:
      "NBA 2K21 is a 2020 basketball simulation video game that was developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association (NBA). It is the 22nd installment in the NBA 2K franchise and the successor to NBA 2K20, and the predecessor to NBA 2K22. The game was released on September 4, 2020 for Microsoft Windows, Nintendo Switch, PlayStation 4, Xbox One, and Google Stadia, and on November 12, 2020 for PlayStation 5 and Xbox Series X/S.[1][2] Most versions released to heavy criticism citing the lack of originality in the gameplay, as well as many micro-transactions and bugs.",
    image: "Games/NBA 2K21 (1).webp"
  },
  {
    name: "Spider Man 2",
    des:
      "Marvel's Spider-Man 2 is a single player game. But you can play as both Peter Parker and Miles Morales, switching between the heroic Spider-Men on your crime-fighting adventures to experience their individual gameplay abilities and story elements.",
    image: "Games/Spider man slider.webp"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= games.length) {
    slideIndex = 0;
  }

  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(games[slideIndex].name));
  p.appendChild(document.createTextNode(games[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = games[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "game-title";
  p.className = "game-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

document.addEventListener("DOMContentLoaded", function() {
  const preBtn = document.querySelector(".pre-btn");
  const nxtBtn = document.querySelector(".nxt-btn");
  const cardContainer = document.querySelector(".card-container");

  preBtn.addEventListener("click", function() {
    cardContainer.scrollLeft -= 300;
  });

  nxtBtn.addEventListener("click", function() {
    cardContainer.scrollLeft += 300;
  });
});

  const readMoreLinks = document.querySelectorAll('.article-link');

  readMoreLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const article = this.closest('.news-article');

      const fullContent = article.querySelector('.article-full');

      fullContent.style.display = (fullContent.style.display === 'none') ? 'block' : 'none';
    });
  });