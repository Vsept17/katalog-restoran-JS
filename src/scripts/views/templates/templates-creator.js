import CONFIG from "../../globals/config";

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
            alt=${name}" />
    </div>
    <div class="infoResto">
        <p>Rating: ${rating}</p>
        <a href="#/detail/${id}">${name}</a>
        <p>${description}</p>
    </div>
</div>
`;

const detailRestoTemp = (detail) => `

  <div class="imgDetail">
    <img  src="${IMG_API + detail.pictureId}" alt=${detail.name}" />
  </div>
<div class="dataResto">
<h1>${detail.name}</h1>
<h2>Alamat: ${detail.address}, ${detail.city}</h2>
<p>${detail.description}</p>
</div>


`;

const categoriesRestoTemp = ({ name }) => `<p> ${name},</p>`;

const foodsTemp = ({ name }) => `<p>${name}</p>`;

const drinkTemp = ({ name }) => `<p>${name}</p>`;

const ratingTemp = (get) => `<p>${get.rating}</p>`;

const reviewTemp = ({ name, review, date }) =>
  `<p>${name}</p> <p>${review}</p><p>${date}</p>`;

export {
  listRestoTemplate,
  detailRestoTemp,
  categoriesRestoTemp,
  foodsTemp,
  drinkTemp,
  ratingTemp,
  reviewTemp,
};
