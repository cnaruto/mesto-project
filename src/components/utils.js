import { toggleButtonState } from "./validate";

export const popupEdit = document.querySelector('#popup-edit');
export const popupNew = document.querySelector('#popup-post');
export const popupImg = document.querySelector('#popup-img');
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

export function submitButton (popup)
{
	const inputList = Array.from(popup.querySelectorAll('.popup__input'));
	const submitButton = popup.querySelector('.popup__button');
	toggleButtonState(inputList, submitButton, 'popup__button_disabled');
}