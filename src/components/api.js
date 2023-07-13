

const config = {
	baseUrl: 'https://nomoreparties.co/v1/plus-cohort-26',
	headers: {
		authorization: 'edb883b6-14a2-491e-951f-939f08a5e584',
		'Content-Type': 'application/json' 
	}
}

export const getInitialCards = () => {
	return fetch(`${config.baseUrl}/cards`, {
		headers: config.headers
	})
		.then((res) => {
			if(res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
}

export const getInitialProfile = () => {
	return fetch(`${config.baseUrl}/users/me`, {
		headers: config.headers
	})
		.then((res) => {
			if(res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
}

export const patchInfoProfile = (profileData) => {
	return fetch(`${config.baseUrl}/users/me`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			name: profileData.name,
			about: profileData.about,
		})
	})
	.then((res) => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка: ${res.status}`);
	})
}

export const postNewCards = (newCard) => {
	return fetch(`${config.baseUrl}/cards`, {
		method: 'POST',
		headers: config.headers,
		body: JSON.stringify({
			name: newCard.name,
			link: newCard.link,
		})
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
}

export const deleteCard = (id) => {
	return fetch(`${config.baseUrl}/cards/${id}`, {
		method: 'DELETE',
		headers: config.headers,
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
}

export const putImgHeart = (id) => {
	return fetch(`${config.baseUrl}/cards/likes/${id}`, {
		method: 'PUT',
		headers: config.headers,
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
}

export const deleteImgHeart = (id) => {
	return fetch(`${config.baseUrl}/cards/likes/${id}`, {
		method: 'DELETE',
		headers: config.headers,
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
}

export const patchImgAvatar = (ava) => {
	return fetch(`${config.baseUrl}/users/me/avatar`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			avatar: ava,
		})
	})
	.then((res) => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка: ${res.status}`);
	})
}
