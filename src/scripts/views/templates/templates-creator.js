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
    <div class="detailResto">
        <p>Rating: ${rating}</p>
        <a href="#${name}">${name}</a>
        <p>${description}</p>
    </div>
</div>
`;

export { listRestoTemplate };
