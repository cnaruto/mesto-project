 import './components/cards.js';
 import './components/utils.js';
 import './pages/index.css';
 import { enableValidation } from './components/validate.js';
 import { popupEdit, popupForm, popupFormNewCard, popupNew, groupList, profileButton, popupCloseAll, profileEdit, hobby, surname, profileInfo, profileSubtitle,  submitButton} from './components/utils.js';
 import { createCard } from './components/cards.js';
 import { openPopup, closePopup } from './components/modal.js';


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

popupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileInfo.textContent = surname.value;
  profileSubtitle.textContent = hobby.value;
  closePopup(popupEdit);
});

popupFormNewCard.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const typePost = popupNew.querySelector('.popup__input_type_post');
  const typeLink = popupNew.querySelector('.popup__input_type_link');
  const cardObj = {name: typePost.value, link: typeLink.value};
  const newCard = createCard(cardObj);
  groupList.prepend(newCard);
  typePost.value = '';
  typeLink.value = '';
  submitButton(popupFormNewCard);
  closePopup(popupNew); 
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
  submitButton(popupForm);
  openPopup(popupEdit);
});

initialCards.forEach (function (item, index) {
  const newPost = createCard(item);
  groupList.append(newPost);
});

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  inputErrorClassActive: 'popup__input-error_active',
  errorClass: 'popup__error_visible',
});