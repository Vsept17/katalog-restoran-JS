/* eslint-disable no-console */
/* eslint-disable array-callback-return */
import FavoriteRestaurantDB from '../../data/favoriteresto-idb';
import { LikedRestaurantTemp } from '../templates/templates-creator';

const FavoriteRestaurant = {
  async render() {
    return `
    <div class='favContainer'>
    <h1>Restaurant Favorit Kamu</h1>
    <div id='listLikeResto' class='listResto'></div>
    </div>
        `;
  },

  async afterRender() {
    const getLikedResturant = await FavoriteRestaurantDB.getAllRestaurant();
    const favRestoContainer = document.querySelector('#listLikeResto');

    getLikedResturant.map((favResto) => {
      favRestoContainer.innerHTML += LikedRestaurantTemp(favResto);
    });
  },
};

export default FavoriteRestaurant;
