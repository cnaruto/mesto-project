import { toggleButtonState } from "./validate";

export const popupEdit = document.querySelector('#popup-edit');
export const popupNew = document.querySelector('#popup-post');
export const popupImg = document.querySelector('#popup-img');
export const popupAvatar = document.querySelector('#popup-avatar');

export const popupForm = popupEdit.querySelector('.popup__form');
export const popupFormNewCard = popupNew.querySelector('.popup__form');
export const profile = document.querySelector('.profile');
export const profileInfo = profile.querySelector('.profile__info');
export const profileSubtitle = profile.querySelector('.profile__subtitle');
export const profileButton = profile.querySelector('.profile__button');
export const profileEdit = document.querySelector('.profile__edit-info');
export const groupList = document.querySelector('.group__list');
export const popupCloseAll = document.querySelectorAll('.popup__close');
export const postTemplate = document.querySelector('#post-template').content;
export const popupImgClick = popupImg.querySelector('.popup__img-click');
export const popupTextClick = popupImg.querySelector('.popup__text-click');
export const surname = popupEdit.querySelector('.popup__input_type_name');
export const hobby = popupEdit.querySelector('.popup__input_type_hobby');
export const profileWrapper = document.querySelector('.profile__wrapper');


export const typePost = popupNew.querySelector('.popup__input_type_post');
export const typeLink = popupNew.querySelector('.popup__input_type_link');
export const typeLinkAvatar = popupAvatar.querySelector('.popup__input_type_link');
export const profileAvatar = profileWrapper.querySelector('.profile__avatar');
export function disableSubmitButton (popup)
{
	const inputList = Array.from(popup.querySelectorAll('.popup__input'));
	const submitButton = popup.querySelector('.popup__button');
	toggleButtonState(inputList, submitButton, 'popup__button_disabled');
}

export function renderLoading(isLoading, item) {
	if (isLoading)
	{
		item.querySelector('.popup__button').textContent = 'Сохранение...'
	}
	else
	{
		item.querySelector('.popup__button').textContent = 'Сохранить'
	}
}