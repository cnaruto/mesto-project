const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileContainer = profileName.querySelector('.profile__container');
const profileEditInfo = profileContainer.querySelector('.profile__edit-info');

const popup = document.querySelector('.popup');
const popupContainer = popup.querySelector('.popup__container');
const popupClose = popupContainer.querySelector('.popup__close');

const post = document.querySelector('.group').querySelector('.group__list').querySelectorAll('.post');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

function showPopup(editProfile, newPlace, popup, popupContainer)
{
  popup.classList.add('popup_opened');
  if (editProfile)
  {
    popupContainer.querySelector('.popup__title').textContent = 'Редактировать профиль';
    popupContainer.querySelector('.popup__info').querySelectorAll('.popup__input')[0].placeholder = 'Жак';
    popupContainer.querySelector('.popup__info').querySelectorAll('.popup__input')[1].placeholder = 'Исследователь океана';
  } 
  else if (newPlace)
  {
    popupContainer.querySelector('.popup__title').textContent = 'Новое место';
    popupContainer.querySelector('.popup__info').querySelectorAll('.popup__input')[0].placeholder = 'Новое место';
    popupContainer.querySelector('.popup__info').querySelectorAll('.popup__input')[1].placeholder = 'Ссылка на картинку';
  } 
 
}

function closePopup()
{
	popup.classList.remove('popup_opened');
}

function saveButton(evt)
{
  const popupInput = popup.querySelectorAll('.popup__input');
  if (popupContainer.querySelector('.popup__title').textContent === 'Новое место')
  {
    evt.preventDefault();
    const newPost = post[0].cloneNode(true);
    const postClick = newPost.querySelector('.post__click');
    newPost.querySelector('.post__container').querySelector('.post__text').textContent = popupInput[0].value;
    newPost.querySelector('.post__text-click').textContent = popupInput[0].value;
    newPost.querySelector('.post__img').src = popupInput[1].value;
    newPost.querySelector('.post__img-click').src = popupInput[1].value;
    newPost.querySelector('.post__img').addEventListener('click', function(evt) {
      postClick.classList.add('post__click-opened');
    });
    const postImgHeart = newPost.querySelector('.post__container').querySelector('.post__img-heart');
    postImgHeart.addEventListener('click', function (evt) {
      evt.target.classList.toggle('post__img-heart_active');
    });
    newPost.querySelector('.post__close').addEventListener ('click', function(){
      postClick.classList.remove('post__click-opened');
    });
    const deleteButton = newPost.querySelector('.post__trash');
    console.log(deleteButton);
    deleteButton.addEventListener('click', function(){
      console.log('check')
      const delPost = deleteButton.closest('.post');
      delPost.remove();
    });

    const postImgClick = newPost.querySelector('.post__img');

    document.querySelector('.group').querySelector('.group__list').prepend(newPost);
    closePopup();
  }
  else
  {
    evt.preventDefault();
    const profileInfo = profileName.querySelector('.profile__info');
    const profileSubtitle = profileName.querySelector('.profile__subtitle');
    const name = popupInput[0].value;
    const job = popupInput[1].value;
    profileInfo.textContent = name; 
    profileSubtitle.textContent = job;
    closePopup();
  }
  popupInput[0].value = '';
  popupInput[1].value = '';
}
profileEditInfo.addEventListener('click', function () {
  showPopup(profileEditInfo, undefined, popup, popupContainer);
});
popupClose.addEventListener('click', closePopup);
popupContainer.addEventListener('submit', saveButton);


post.forEach(function (item, i) {
  item.querySelector('.post__img-click').src = initialCards[i].link;
	item.querySelector('.post__img').src = initialCards[i].link;
  item.querySelector('.post__text-click').textContent = initialCards[i].name; 
	item.querySelector('.post__container').querySelector('.post__text').textContent = initialCards[i].name;
  const postImgHeart = item.querySelector('.post__container').querySelector('.post__img-heart');
  const postImgClick = item.querySelector('.post__img');
  postImgClick.addEventListener('click', function(evt) {
    item.querySelector('.post__click').classList.add('post__click-opened');
  })
  const postClose = item.querySelector('.post__close');
  console.log(postClose);
  postClose.addEventListener('click', function(evt) {
    item.querySelector('.post__click').classList.remove('post__click-opened');
  })
  postImgHeart.addEventListener('click', function (evt) {
    evt.target.classList.toggle('post__img-heart_active');
  })
  const deleteButton = item.querySelector('.post__trash');
  deleteButton.addEventListener('click', function(){
    const delPost = deleteButton.closest('.post');
    delPost.remove();
  })
});

const profileButton = profile.querySelector('.profile__button');
profileButton.addEventListener('click', function () {
  showPopup(undefined, profileButton, popup, popupContainer);
});
