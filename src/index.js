 import './components/cards.js';
 import './components/utils.js';
 import './pages/index.css';
 import { enableValidation } from './components/validate.js';
 import { popupEdit, popupForm, popupFormNewCard, popupNew, groupList, profileButton, popupCloseAll, profileEdit, hobby, surname, profileInfo, profileSubtitle } from './components/utils.js';
 import { createCard } from './components/cards.js';
 import { openPopup, closePopup } from './components/modal.js';
 import { initialCards } from './components/cards.js';

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
  const submitButtonSelector = popupFormNewCard.querySelector('.popup__button');
  submitButtonSelector.setAttribute('disabled', true);
  submitButtonSelector.classList.add('popup__button_disabled');
  console.log(submitButtonSelector);
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
  const submitButton = popupForm.querySelector('.popup__button');
  submitButton.removeAttribute('disabled', true);
  submitButton.classList.remove('popup__button_disabled');
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