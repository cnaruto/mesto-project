const showInputError = (formSelector, inputSelector, errorMessage, inputErrorClass, inputErrorClassActive) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(inputErrorClassActive);
};

const hideInputError = (formSelector, inputSelector, inputErrorClass, inputErrorClassActive) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove(inputErrorClass);
  errorElement.classList.remove(inputErrorClassActive);
  errorElement.textContent = '';
};

const checkInputValidity = (formSelector, inputSelector, validObj) => {
  if (inputSelector.validity.patternMismatch)
  {
    inputSelector.setCustomValidity(inputSelector.dataset.errorMessage);
  }
  else
  {
    inputSelector.setCustomValidity("");
  }
  if (!inputSelector.validity.valid) 
  {
    showInputError(formSelector, inputSelector, inputSelector.validationMessage, validObj.inputErrorClass, validObj.inputErrorClassActive);
  }
  else 
  {
    hideInputError(formSelector, inputSelector, validObj.inputErrorClass, validObj.inputErrorClassActive);
  }
}

export const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

export const toggleButtonState = (inputList, submitButtonSelector, inactiveButtonClass) => {
  if (hasInvalidInput(inputList))
  {
    submitButtonSelector.setAttribute('disabled', true);
    submitButtonSelector.classList.add(inactiveButtonClass);
  }
  else
  {
    submitButtonSelector.removeAttribute('disabled', true);
    submitButtonSelector.classList.remove(inactiveButtonClass);
  }
};

const setEventListeners = (formSelector, validObj) => {
  const inputList = Array.from(formSelector.querySelectorAll(validObj.inputSelector));
  const submitButtonSelector = formSelector.querySelector(validObj.submitButtonSelector);
  toggleButtonState(inputList, submitButtonSelector, validObj.inactiveButtonClass);  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formSelector, inputElement, validObj);
      toggleButtonState(inputList, submitButtonSelector, validObj.inactiveButtonClass)
    })
  });
};

export const enableValidation = (validObj) => {
  const formList = Array.from(document.querySelectorAll(validObj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, validObj);
  });
};
