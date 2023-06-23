 import './components/cards.js';
 import './components/utils.js';
 import './pages/index.css';
 import { enableValidation } from './components/validate.js';
 import { popupEdit, popupForm, popupFormNewCard, popupNew, groupList, profileButton, popupCloseAll, profileEdit, hobby, surname, profileInfo, profileSubtitle } from './components/utils.js';
 import { createCard } from './components/cards.js';
 import { openPopup, closePopup } from './components/modal.js';
 enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 

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
  closePopup(popupNew); 
});

profileButton.addEventListener('click', function () {
  openPopup(popupNew);
});

window.addEventListener('click', function (evt) {
  const target = evt.target;

  if (!target.closest('.popup__container') && target.closest('.popup'))
  {
    closePopup(target.closest('.popup'));
  }
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
  openPopup(popupEdit);
});


surname.value = profileInfo.textContent;
hobby.value = profileSubtitle.textContent;
