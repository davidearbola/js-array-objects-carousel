function stampaSlide() {
	return `
        <img src="./img/${slides[slideActive].percorso}" alt="">
        <div class="absolute">
            <h4>${slides[slideActive].titolo}</h4>
            <p>${slides[slideActive].descrizione}</p>
        </div>
`;
}

function stampaThumb(array) {
	for (let i = 0; i < array.length; i++) {
		thumbNails.innerHTML += `<img src="./img/${slides[i].percorso}" alt=""></img>`;
	}
}

function aggiungiClick(array) {
	for (let i = 0; i < array.length; i++) {
		array[i].addEventListener(`click`, function () {
			slideActive = i;
			slide.innerHTML = stampaSlide();
		});
	}
}
