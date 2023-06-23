export function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', keydownEvent);
}

export function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', keydownEvent);
}

function keydownEvent(evt) {
  if (evt.key === 'Escape')
    {
      closePopup(document.querySelector('.popup_opened'));
    }
}
