import CONFIG from "../../globals/config";
// import rating from "../../../public/images/rating.png";

const IMG_API = CONFIG.IMAGE_URL_MD;
const listRestoTemplate = ({
  id,
  name,
  city,
  pictureId,
  rating,
  description,
}) =>
  `
<div class="resto" id="${name}">
    <div class="citycontainer">
          <div class="citybg">
            <p class="city">${city}</p>
          </div>
          <img src="${IMG_API + pictureId}" width="100%"
            alt="${name}" />
    </div>
    <div class="infoResto">
        <p>Rating: ${rating}</p>
        <a class="toDetail" href="#/detail/${id}">${name}</a>
        <p>${description}</p>
    </div>
</div>
`;

const detailRestoTemp = (detail) => `

  <div class="imgDetail">
    <img  src="${IMG_API + detail.pictureId}" alt="${detail.name}" />
  </div>
  <div class="dataResto">
    <div class="ratingContainer">
      <img src="./images/rating.png" style="width:10%" alt="ratings"/>
      <p class="rating">${detail.rating}</p>
    </div>
  <h1>${detail.name}</h1>
  <h2>Alamat: ${detail.address}, ${detail.city}</h2>
  <p>${detail.description}</p>
  </div>


`;

const categoriesRestoTemp = ({ name }) => `<p> ${name},</p>`;

const foodsTemp = ({ name }) => `<p>${name}</p>`;

const drinkTemp = ({ name }) => `<p>${name}</p>`;

const reviewTemp = ({ name, review, date }) =>
  `
  <div class="detailReview">
    <h4>${name}</h4>
    <p>${date}</p>
    <p>${review}</p>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="Menyukai restoran" id="likeBtn" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="Tidak suka restoran" id="likeBtn" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const LikedRestaurantTemp = ({id, name, city, picture, rating, description}) => `

<div class="resto" id="${name}">
    <div class="citycontainer">
          <div class="citybg">
            <p class="city">${city}</p>
          </div>
          <img src="${IMG_API + picture}" width="100%"
            alt="${name}" />
    </div>
    <div class="infoResto">
        <p>Rating: ${rating}</p>
        <a class="toDetail" href="#/detail/${id}">${name}</a>
    </div>
</div>
`;

export {
  listRestoTemplate,
  detailRestoTemp,
  categoriesRestoTemp,
  foodsTemp,
  drinkTemp,
  reviewTemp,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  LikedRestaurantTemp,
};
