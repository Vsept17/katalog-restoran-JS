import RestaurantSource from "../../data/restaurant-source";
import { listRestoTemplate } from "../templates/templates-creator";

const Home = {
  async render() {
    return `<div class="hero">
    <div class="titleHero">
      <h2 class="heroTitle">Yuk mulai jelajahi restoran favorit kamu disini</h2>
      <p class="heroTitle2">Temukan restoran dengan berbagai macam keunikan dan ciri khasnya</p>
    </div>
    <img class="heroImg" src="./images/heros/hero-image_2.jpg" width="100%" alt="hero" />
  </div>
  <div class="exploreContainer">
  <p class="explore">Explore Restoran</p>
  </div>
    <div id="listResto" class="listResto">
    </div>
  `;
  },

  async afterRender() {
    const listRestaurant = await RestaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector("#listResto");
    listRestaurant.forEach((resto) => {
      restaurantContainer.innerHTML += listRestoTemplate(resto);
    });
  },
};

export default Home;
