/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable quotes */
// eslint-disable-next-line quotes
import LikeBtnInitiator from "../src/scripts/utils/likeBtnInitiator";
import FavoriteMovieIdb from "../src/scripts/data/favoriteresto-idb";

const addLikeBtnContainer = () => {
  document.body.innerHTML = '<div id="likeBtn"></div>';
};

describe("Like A Restaurant", () => {
  beforeEach(() => {
    addLikeBtnContainer();
  });

  it("should show the like button when the restaurant has not been liked before", async () => {
    await LikeBtnInitiator.init({
      likeButton: document.querySelector("#likeBtn"),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="Menyukai restoran"]')
    ).toBeTruthy();
  });

  it("should show the unlike button when the restaurant has not been liked before", async () => {
    await LikeBtnInitiator.init({
      likeButton: document.querySelector("#likeBtn"),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="Tidak suka restoran"]')
    ).toBeFalsy();
  });

  it("should be able to like the restaurant", async () => {
    await LikeBtnInitiator.init({
      likeButton: document.querySelector("#likeBtn"),
      restaurant: {
        id: 1,
      },
    });
    document.querySelector("#likeBtn").dispatchEvent(new Event("click"));
    const restaurantTest = await FavoriteMovieIdb.getRestaurant(1);

    expect(restaurantTest).toEqual({ id: 1 });

    FavoriteMovieIdb.deleteRestaurant(1);
  });

  it("should not add a movie again when its already liked", async () => {
    await LikeBtnInitiator.init({
      likeButton: document.querySelector("#likeBtn"),
      restaurant: {
        id: 1,
      },
    });

    await FavoriteMovieIdb.putRestaurant({ id: 1 });

    document.querySelector("#likeBtn").dispatchEvent(new Event("click"));

    expect(await FavoriteMovieIdb.getAllRestaurant()).toEqual([{ id: 1 }]);

    FavoriteMovieIdb.deleteRestaurant(1);
  });

  xit("should not add a restaurant when it has no id", async () => {
    await LikeBtnInitiator.init({
      likeButton: document.querySelector("#likeBtn"),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector("#likeBtn").dispatchEvent(new Event("click"));
    expect(await FavoriteMovieIdb.getAllRestaurant()).toEqual([]);
  });
});
