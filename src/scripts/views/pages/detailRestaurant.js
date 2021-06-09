import RestaurantSource from "../../data/restaurant-source";
import {
  categoriesRestoTemp,
  detailRestoTemp,
  foodsTemp,
  drinkTemp,
  ratingTemp,
  reviewTemp,
} from "../templates/templates-creator";
import UrlParser from "../../routes/url-parser";

const DetailRestaurant = {
  async render() {
    return `
        <div class="detailResto" id="detailResto">
          <div class="headDetail" id="headDetail"></div>
          <div class="midContainer">
          <div class="categories" id="categories">
            <p>Kategori Menu: </p>
          </div>
          <div id="menus" class="menus">
            <div class="menusContainer">
              <h3>Foods Menu:</h3>
              <div id="foods"></div>
            </div>
            <div class="menusContainer">
              <h3>Drinks Menu:</h3>
              <div id="drinks"></div>
            </div>
          </div>
          <div class="reviewContainer">
          <h3>Customer Review: </h3>
          <div id="reviews"></div>
          </div>
        </div>
        </div>
        
        
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const getDetailResto = await RestaurantSource.detailRestaurant(url.id);
    const getMenusresto = await RestaurantSource.menuResto(url.id);
    const getCategories = getDetailResto.categories;
    const foods = getMenusresto.foods;
    const drinks = getMenusresto.drinks;
    const review = getDetailResto.customerReviews;
    const restoContainer = document.querySelector("#headDetail");
    const domCategories = document.querySelector("#categories");
    const domFoods = document.querySelector("#foods");
    const domDrinks = document.querySelector("#drinks");
    const domReview = document.querySelector("#reviews");

    restoContainer.innerHTML += detailRestoTemp(getDetailResto);
    getCategories.map((categories) => {
      domCategories.innerHTML += categoriesRestoTemp(categories);
    });
    foods.map((menus) => {
      domFoods.innerHTML += foodsTemp(menus);
    });
    drinks.map((menus) => {
      domDrinks.innerHTML += drinkTemp(menus);
    });
    review.map((review) => {
      domReview.innerHTML += reviewTemp(review);
    });
  },
};

export default DetailRestaurant;
