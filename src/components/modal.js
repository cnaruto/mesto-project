export function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', keydownEvent);
  window.addEventListener('click', clickEvent);
}

export function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', keydownEvent);
  window.removeEventListener('click', clickEvent);
}

function keydownEvent(evt) {
  if (evt.key === 'Escape')
    {
      closePopup(document.querySelector('.popup_opened'));
    }
}

function clickEvent(evt) {
  const target = evt.target;

  if (!target.closest('.popup__container') && target.closest('.popup'))
  {
    closePopup(target.closest('.popup'));
  }
}

