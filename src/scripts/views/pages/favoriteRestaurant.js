import FavoriteRestaurantDB from "../../data/favoriteresto-idb";
import { LikedRestaurantTemp } from "../templates/templates-creator";

const FavoriteRestaurant = {
  async render() {
    return `
    <h1>ini favorite</h1>
        <div id="listLikeResto" class="listLikeResto"></div>
        `;
  },

  async afterRender() {
    const getLikedResturant = await FavoriteRestaurantDB.getAllRestaurant();
    const favRestoContainer = document.querySelector("#listLikeResto");
    console.log(getLikedResturant);

    getLikedResturant.map((favResto) => {
      favRestoContainer.innerHTML += LikedRestaurantTemp(favResto);
    });
  },
};

export default FavoriteRestaurant;
