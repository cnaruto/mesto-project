 import './components/cards.js';
 import './components/utils.js';
 import './pages/index.css';
 import { enableValidation } from './components/validate.js';
 import { postTemplate, popupEdit, popupForm, popupAvatar, popupFormNewCard, popupNew, groupList, profileButton, popupCloseAll, profileEdit, hobby, surname, profileInfo, profileSubtitle,  disableSubmitButton, profileWrapper, renderLoading, typePost, typeLink, typeLinkAvatar, profileAvatar} from './components/utils.js';
 import { createCard } from './components/cards.js';
 import { openPopup, closePopup } from './components/modal.js';
 import { getInitialCards, getInitialProfile, patchInfoProfile, postNewCards, patchImgAvatar } from './components/api.js';

//coment-test

popupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  renderLoading(true, popupForm);
  patchInfoProfile({
    name: surname.value, 
    about: hobby.value})
    .then((res) => {
      console.log(res);
      profileInfo.textContent = res.name;
      profileSubtitle.textContent = res.about;
      closePopup(popupEdit);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupForm);
    })
});

popupFormNewCard.addEventListener('submit', function (evt) {
  evt.preventDefault();
  renderLoading(true, popupFormNewCard);
  const cardObj = {name: typePost.value, link: typeLink.value};
  postNewCards(cardObj)
    .then((res) => {
      const newCard = createCard(res);
      groupList.prepend(newCard);
      typePost.value = '';
      typeLink.value = '';
      disableSubmitButton(popupFormNewCard);
      closePopup(popupNew); 
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupFormNewCard);
      
    })
});

profileButton.addEventListener('click', function () {
  openPopup(popupNew);
});

popupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  profileInfo.textContent = surname.value;
  profileSubtitle.textContent = hobby.value;
  closePopup(popupEdit);
});

popupCloseAll.forEach(function (button) {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', function () {
    closePopup(buttonsPopup)});
})

profileEdit.addEventListener('click', function (evt) {
  surname.value = profileInfo.textContent;
  hobby.value = profileSubtitle.textContent;
  disableSubmitButton(popupForm);
  openPopup(popupEdit);
});

function allPromise(getInitialProfile, getInitialCards) {
  const firstPromise = getInitialProfile();
  const secondPromise = getInitialCards();
  const promises = [firstPromise, secondPromise]

  Promise.all(promises)
    .then((res) => {
      console.log(res);
      const idProfile = res[0]._id;
      const cards = res[1];
      
      profileInfo.textContent = res[0].name;
      profileSubtitle.textContent = res[0].about;
      profileWrapper.querySelector('.profile__avatar').src = res[0].avatar;
      cards.forEach((item) => {
        const newPost = createCard(item);
        newPost.dataset.id = item._id;
        groupList.append(newPost);
        if(item.owner._id !== idProfile) {
          const trash = newPost.querySelector('.post__trash');
          trash.remove();
        }
      })
    })
    .catch((err) => {
      console.log(err);
    })
    
}

allPromise(getInitialProfile, getInitialCards);

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  inputErrorClassActive: 'popup__input-error_active',
  errorClass: 'popup__error_visible',
});

profileWrapper.addEventListener('click', function () {
  openPopup(popupAvatar)
});

popupAvatar.addEventListener('submit', function (evt) {
  evt.preventDefault();
  renderLoading(true, popupAvatar);
  console.log(typeLinkAvatar.value)
  patchImgAvatar(typeLinkAvatar.value)
    .then((res) => {
      console.log(res);
      profileAvatar.src = typeLinkAvatar.value;
      closePopup(popupAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupAvatar);
    })
});
