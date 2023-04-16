function closeRemove(item) {
  item.classList.remove('popup_opened');
}

function createCard(sourseValue, textValue)
{
  const popupImg = document.querySelector('#popup-img');
  const postTemplate = document.querySelector('#post-template').content;
  const postElement = postTemplate.querySelector('.post').cloneNode(true);
  postElement.querySelector('.post__img').src = sourseValue;
  postElement.querySelector('.post__text').textContent = textValue;

  postElement.querySelector('.post__img-heart').addEventListener('click', function (evt){
    const evtHeart = evt.target;
    evtHeart.classList.toggle('post__img-heart_active');
  });
  postElement.querySelector('.post__trash').addEventListener('click', function() {
    const delPost = postElement.querySelector('.post__trash').closest('.post');
    delPost.remove();
  });

  postElement.querySelector('.post__img').addEventListener('click', function () {
    popupImg.querySelector('.popup__img-click').src = postElement.querySelector('.post__img').src;
    popupImg.querySelector('.popup__text-click').textContent = textValue;
    popupImg.classList.add('popup_opened');
  });

  popupImg.querySelector('.popup__close').addEventListener('click', function () {
    closeRemove(popupImg);
  })
  return postElement;
} 

function openPopup(item) {
  item.classList.add('popup_opened');
}

function closePopup(item) {
  item.classList.remove('popup_opened');
}

const popupEdit = document.querySelector('#popup-edit');
const popupNew = document.querySelector('#popup-post');
const profile = document.querySelector('.profile');
const profileEdit = document.querySelector('.profile__edit-info');
const groupList = document.querySelector('.group__list');

profileEdit.addEventListener('click', function () {
  openPopup(popupEdit);
});
popupEdit.querySelector('.popup__close').addEventListener('click', function () {
  closePopup(popupEdit);
});
popupEdit.querySelector('.popup__form').addEventListener('submit', function (evt) {
  evt.preventDefault();
  const name = popupEdit.querySelector('.popup__input_type_name');
  const hobby = popupEdit.querySelector('.popup__input_type_hobby');
  profile.querySelector('.profile__info').textContent = name.value;
  profile.querySelector('.profile__subtitle').textContent = hobby.value;
  closePopup(popupEdit);
  name.value = '';
  hobby.value = '';
})
profile.querySelector('.profile__button').addEventListener('click', function () {
  openPopup(popupNew);
})
popupNew.querySelector('.popup__close').addEventListener('click', function () {
  closePopup(popupNew);
})
popupNew.querySelector('.popup__form').addEventListener('submit', function (evt) {
  evt.preventDefault();
  const text = popupNew.querySelector('.popup__input_type_post');
  const link = popupNew.querySelector('.popup__input_type_link');
  const newCard = createCard(link.value, text.value);
  groupList.prepend(newCard);
  text.value = '';
  link.value = '';
  closePopup(popupNew); 
})

initialCards.forEach (function (item, index) {
  const newPost = createCard(item.link, item.name);
  groupList.append(newPost);
})