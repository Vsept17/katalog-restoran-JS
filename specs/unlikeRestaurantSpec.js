/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import LikeBtnInitiator from "../src/scripts/utils/likeBtnInitiator";
import FavoriteMovieIdb from "../src/scripts/data/favoriteresto-idb";

const addLikeBtnContainer = () => {
  document.body.innerHTML = '<div id="likeBtn"></div>';
};

describe("Unlike a Restaurant", () => {
  beforeEach(async () => {
    addLikeBtnContainer();
    await FavoriteMovieIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteMovieIdb.deleteRestaurant(1);
  });

  it("should display unlike widget when the movie has been liked", async () => {
    await LikeBtnInitiator.init({
      likeButton: document.querySelector("#likeBtn"),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="Tidak suka restoran"]')
    ).toBeTruthy();
  });

  it("should not display like widget when the movie has been liked", async () => {
    await LikeBtnInitiator.init({
      likeButton: document.querySelector("#likeBtn"),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="Menyukai restoran"]')
    ).toBeFalsy();
  });

  it("should be able to remove liked restaurant from the list", async () => {
    await LikeBtnInitiator.init({
      likeButton: document.querySelector("#likeBtn"),
      restaurant: { id: 1 },
    });

    document
      .querySelector('[aria-label="Tidak suka restoran"]')
      .dispatchEvent(new Event("click"));
    FavoriteMovieIdb.deleteRestaurant(1);
    expect(await FavoriteMovieIdb.getAllRestaurant()).toEqual([]);
  });

  it("should not throw error if the unliked movie is not in the list", async () => {
    await LikeBtnInitiator.init({
      likeButton: document.querySelector('#likeBtn'),
      restaurant: {
        id: 1,
      },
    });
    await FavoriteMovieIdb.deleteRestaurant(1);
    document.querySelector('[aria-label="Tidak suka restoran"]').dispatchEvent(new Event('click'));
    expect(await FavoriteMovieIdb.getAllRestaurant()).toEqual([]);
  });
});
