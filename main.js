(()=>{"use strict";var e=function(e,t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.removeAttribute("disabled",!0),t.classList.remove(o)):(t.setAttribute("disabled",!0),t.classList.add(o))},t=document.querySelector("#popup-edit"),o=document.querySelector("#popup-post"),n=document.querySelector("#popup-img"),r=document.querySelector("#popup-avatar"),c=t.querySelector(".popup__form"),a=o.querySelector(".popup__form"),u=document.querySelector(".profile"),i=u.querySelector(".profile__info"),s=u.querySelector(".profile__subtitle"),l=u.querySelector(".profile__button"),p=document.querySelector(".profile__edit-info"),d=document.querySelector(".group__list"),_=document.querySelectorAll(".popup__close"),f=document.querySelector("#post-template").content,v=n.querySelector(".popup__img-click"),m=n.querySelector(".popup__text-click"),h=t.querySelector(".popup__input_type_name"),y=t.querySelector(".popup__input_type_hobby"),S=document.querySelector(".profile__wrapper"),b=o.querySelector(".popup__input_type_post"),q=o.querySelector(".popup__input_type_link"),k=r.querySelector(".popup__input_type_link"),E=S.querySelector(".profile__avatar");function C(t){var o=Array.from(t.querySelectorAll(".popup__input")),n=t.querySelector(".popup__button");e(o,n,"popup__button_disabled")}function g(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}function L(e){e.classList.add("popup_opened"),document.addEventListener("keydown",j),window.addEventListener("click",A)}function x(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",j),window.removeEventListener("click",A)}function j(e){"Escape"===e.key&&x(document.querySelector(".popup_opened"))}function A(e){var t=e.target;!t.closest(".popup__container")&&t.closest(".popup")&&x(t.closest(".popup"))}var P,U,w={baseUrl:"https://nomoreparties.co/v1/plus-cohort-26",headers:{authorization:"edb883b6-14a2-491e-951f-939f08a5e584","Content-Type":"application/json"}};function D(e){var t=f.querySelector(".post").cloneNode(!0),o=t.querySelector(".post__img"),r=t.querySelector(".post__like"),c=t.querySelector(".post__text"),a=t.querySelector(".post__img-heart"),u=t.querySelector(".post__trash");return o.src=e.link,o.alt=e.name,c.textContent=e.name,r.textContent=e.likes.length,e.likes.forEach((function(e){e.name===i.textContent&&e.about===s.textContent&&a.classList.add("post__img-heart_active")})),a.addEventListener("click",(function(t){var o,n=t.target;n.classList.contains("post__img-heart_active")?(o=e._id,fetch("".concat(w.baseUrl,"/cards/likes/").concat(o),{method:"DELETE",headers:w.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){r.textContent=e.likes.length,n.classList.remove("post__img-heart_active"),console.log(e)})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(w.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:w.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(e._id).then((function(e){r.textContent=e.likes.length,n.classList.add("post__img-heart_active"),console.log(e)})).catch((function(e){console.log(e)}))})),u.addEventListener("click",(function(){var o;(o=e._id,fetch("".concat(w.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:w.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){t.remove()})).catch((function(e){console.log(e)}))})),o.addEventListener("click",(function(){v.src=e.link,v.alt=e.name,m.textContent=e.name,L(n)})),t}c.addEventListener("submit",(function(e){var o;e.preventDefault(),g(!0,c),(o={name:h.value,about:y.value},fetch("".concat(w.baseUrl,"/users/me"),{method:"PATCH",headers:w.headers,body:JSON.stringify({name:o.name,about:o.about})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){console.log(e),i.textContent=e.name,s.textContent=e.about,x(t)})).catch((function(e){console.log(e)})).finally((function(){g(!1,c)}))})),a.addEventListener("submit",(function(e){var t;e.preventDefault(),g(!0,a),(t={name:b.value,link:q.value},fetch("".concat(w.baseUrl,"/cards"),{method:"POST",headers:w.headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){var t=D(e);d.prepend(t),b.value="",q.value="",C(a),x(o)})).catch((function(e){console.log(e)})).finally((function(){g(!1,a)}))})),l.addEventListener("click",(function(){L(o)})),c.addEventListener("submit",(function(e){e.preventDefault(),i.textContent=h.value,s.textContent=y.value,x(t)})),_.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){x(t)}))})),p.addEventListener("click",(function(e){h.value=i.textContent,y.value=s.textContent,C(c),L(t)})),U=[fetch("".concat(w.baseUrl,"/users/me"),{headers:w.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),fetch("".concat(w.baseUrl,"/cards"),{headers:w.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))],Promise.all(U).then((function(e){console.log(e);var t=e[0]._id,o=e[1];i.textContent=e[0].name,s.textContent=e[0].about,S.querySelector(".profile__avatar").src=e[0].avatar,o.forEach((function(e){var o=D(e);o.dataset.id=e._id,d.append(o),e.owner._id!==t&&o.querySelector(".post__trash").remove()}))})).catch((function(e){console.log(e)})),P={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",inputErrorClassActive:"popup__input-error_active",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(P.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(t,o){var n=Array.from(t.querySelectorAll(o.inputSelector)),r=t.querySelector(o.submitButtonSelector);e(n,r,o.inactiveButtonClass),n.forEach((function(c){c.addEventListener("input",(function(){!function(e,t,o){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,o,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(o),r.classList.remove(n),r.textContent=""}(e,t,o.inputErrorClass,o.inputErrorClassActive):function(e,t,o,n,r){var c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n),c.textContent=o,c.classList.add(r)}(e,t,t.validationMessage,o.inputErrorClass,o.inputErrorClassActive)}(t,c,o),e(n,r,o.inactiveButtonClass)}))}))}(t,P)})),S.addEventListener("click",(function(){L(r)})),r.addEventListener("submit",(function(e){var t;e.preventDefault(),g(!0,r),console.log(k.value),(t=k.value,fetch("".concat(w.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:w.headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){console.log(e),E.src=k.value,x(r)})).catch((function(e){console.log(e)})).finally((function(){g(!1,r)}))}))})();