/* eslint-disable no-underscore-dangle */
import FavoriteRestaurantDB from '../data/favoriteresto-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/templates-creator';

const LikeBtnInitiator = {
  async init({ likeButton, restaurant }) {
    this._likeButton = likeButton;
    this._restaurant = restaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const resto = await FavoriteRestaurantDB.getRestaurant(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButton.innerHTML = createLikeButtonTemplate();

    const likeBtn = document.querySelector('#likeBtn');
    likeBtn.addEventListener('click', async () => {
      await FavoriteRestaurantDB.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButton.innerHTML = createLikedButtonTemplate();

    const likeBtn = document.querySelector('#likeBtn');
    likeBtn.addEventListener('click', async () => {
      await FavoriteRestaurantDB.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeBtnInitiator;
