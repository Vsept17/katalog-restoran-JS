/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
Feature("Unlike Restaurant");

const assert = require("assert");

Scenario("Unlike Restaurant Step by step", async ({ I }) => {
  I.amOnPage("/");
  I.seeElement(".toDetail");

  const firstFilm = locate(".toDetail").first();
  const firstFIlmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);
  I.seeElement(".detailResto");
  I.click(".like");

  I.amOnPage("/#/favorite");
  I.seeElement(".favContainer");

  const likedFilmTitle = await I.grabTextFrom(".infoResto a");
  assert.strictEqual(firstFIlmTitle, likedFilmTitle);

  I.seeElement(".list");
  I.click(".nav__item_home");
  I.seeElement(".list");
  I.click(".nav__item_fav");
  I.seeElement(".infoResto");
  I.click(".infoResto a");

  I.seeElement(".detailResto");
  I.click(".like");

  I.seeElement(".list");
  I.click(".nav__item_fav");

  I.dontSeeElement(".resto");
});
