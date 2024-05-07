function stampaSlide() {
	return `
        <img src="./img/${slides[slideActive].percorso}" alt="">
        <div class="absolute">
            <h4>${slides[slideActive].titolo}</h4>
            <p>${slides[slideActive].descrizione}</p>
        </div>
`;
}
