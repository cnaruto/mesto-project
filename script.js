const popupEdit = document.querySelector('#popup-edit');
const popupNew = document.querySelector('#popup-post');
const popupImg = document.querySelector('#popup-img');

const popupForm = popupEdit.querySelector('.popup__form');
const popupFormNewCard = popupNew.querySelector('.popup__form');
const profile = document.querySelector('.profile');
const profileInfo = profile.querySelector('.profile__info');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const profileButton = profile.querySelector('.profile__button');
const profileEdit = document.querySelector('.profile__edit-info');
const groupList = document.querySelector('.group__list');
const popupCloseAll = document.querySelectorAll('.popup__close');
const postTemplate = document.querySelector('#post-template').content;

const popupImgClick = popupImg.querySelector('.popup__img-click');
const popupTextClick = popupImg.querySelector('.popup__text-click');

const surname = popupEdit.querySelector('.popup__input_type_name');
const hobby = popupEdit.querySelector('.popup__input_type_hobby');


function openPopup(item) {
  item.classList.add('popup_opened');
}

function closePopup(item) {
  item.classList.remove('popup_opened');
}

function createCard(cardObj)
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
} 



initialCards.forEach (function (item, index) {
  const newPost = createCard(item);
  groupList.append(newPost);
})

profileEdit.addEventListener('click', function () {
  surname.value = profileInfo.textContent;
  hobby.value = profileSubtitle.textContent;
  openPopup(popupEdit);
});



popupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileInfo.textContent = surname.value;
  profileSubtitle.textContent = hobby.value;
  closePopup(popupEdit);
})
profileButton.addEventListener('click', function () {
  openPopup(popupNew);
});

popupFormNewCard.addEventListener('submit', function (evt) {
  evt.preventDefault();
  typePost = popupNew.querySelector('.popup__input_type_post');
  typeLink = popupNew.querySelector('.popup__input_type_link');
  const cardObj = {name: typePost.value, link: typeLink.value};
  const newCard = createCard(cardObj);
  groupList.prepend(newCard);
  typePost.value = '';
  typeLink.value = '';
  closePopup(popupNew); 
})


popupCloseAll.forEach(function (button) {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', function () {
    closePopup(buttonsPopup)});
})
