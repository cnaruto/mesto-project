import { popupImg, postTemplate, groupList, popupImgClick, popupTextClick} from "./utils.js";
import { openPopup } from "./modal.js";


export function createCard(cardObj)
{
  const postElement = postTemplate.querySelector('.post').cloneNode(true);
  const postImg = postElement.querySelector('.post__img');
  const postText = postElement.querySelector('.post__text');
  const postImgHeart = postElement.querySelector('.post__img-heart');
  const postTrash = postElement.querySelector('.post__trash');
  // const popupImgClick = popupImg.querySelector('.popup__img-click');
  // const popupTextClick = popupImg.querySelector('.popup__text-click');

  postImg.src = cardObj.link;
  postImg.alt = cardObj.name;
  postText.textContent = cardObj.name;

  postImgHeart.addEventListener('click', function (evt) {
    const evtHeart = evt.target;
    evtHeart.classList.toggle('post__img-heart_active');
  });
  postTrash.addEventListener('click', function() {
    postElement.remove();
  });

  postImg.addEventListener('click', function () {
    popupImgClick.src = cardObj.link;
    popupImgClick.alt = cardObj.name;
    popupTextClick.textContent = cardObj.name;
    openPopup(popupImg);
  });
  return postElement;
};
