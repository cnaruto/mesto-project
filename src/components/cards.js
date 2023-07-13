import { popupImg, postTemplate, groupList, popupImgClick, popupTextClick, profileInfo, profileSubtitle} from "./utils.js";
import { openPopup } from "./modal.js";
import { deleteCard, putImgHeart, deleteImgHeart } from "./api.js";

export function createCard(cardObj)
{
  const postElement = postTemplate.querySelector('.post').cloneNode(true);
  const postImg = postElement.querySelector('.post__img');
  const postLikes = postElement.querySelector('.post__like');
  const postText = postElement.querySelector('.post__text');
  const postImgHeart = postElement.querySelector('.post__img-heart');
  const postTrash = postElement.querySelector('.post__trash');
  // const popupImgClick = popupImg.querySelector('.popup__img-click');
  // const popupTextClick = popupImg.querySelector('.popup__text-click');

  postImg.src = cardObj.link;
  postImg.alt = cardObj.name;
  postText.textContent = cardObj.name;
  postLikes.textContent = cardObj.likes.length;
  cardObj.likes.forEach((item) => {
    if (item.name === profileInfo.textContent && item.about === profileSubtitle.textContent)
    {
       postImgHeart.classList.add('post__img-heart_active');
    }
  })

  postImgHeart.addEventListener('click', function (evt) {
    const evtHeart = evt.target;
    if (evtHeart.classList.contains('post__img-heart_active'))
    {
        deleteImgHeart(cardObj._id)
        .then((res) => {
          postLikes.textContent = res.likes.length;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    } 
    else 
    {
      putImgHeart(cardObj._id)
      .then((res) => {
        postLikes.textContent = res.likes.length;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    }
    evtHeart.classList.toggle('post__img-heart_active');
  });
  
  postTrash.addEventListener('click', function() {
    deleteCard(cardObj._id)
    .catch((err) => {
      console.log(err);
    })
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
