const showInputError = (formSelector, inputSelector, errorMessage) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formSelector, inputSelector) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
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
    showInputError(formSelector, inputSelector, inputSelector.validationMessage);
  }
  else 
  {
    hideInputError(formSelector, inputSelector);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, submitButtonSelector, inactiveButtonClass) => {
  if (hasInvalidInput(inputList))
  {
    submitButtonSelector.classList.add(inactiveButtonClass);
  }
  else
  {
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
