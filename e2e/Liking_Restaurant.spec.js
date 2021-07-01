/* eslint-disable quotes */
/* eslint-disable no-undef */
Feature("Liking Restaurant");

const assert = require("assert");

Scenario("Like a Restaurant Step by Step", async ({ I }) => {
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
});
