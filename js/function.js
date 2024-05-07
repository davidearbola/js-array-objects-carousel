function stampaSlide() {
	return `<div class="row">
    <div class="col-img">
        <img src="./img/${slides[slideActive].percorso}" alt="">
        <div class="absolute">
            <h4>${slides[slideActive].titolo}</h4>
            <p>${slides[slideActive].descrizione}</p>
        </div>
    </div>
    <div class="col-thumb">
        <img src="./img/01.webp" alt="">
        <img src="./img/02.webp" alt="">
        <img src="./img/03.webp" alt="">
        <img src="./img/04.webp" alt="">
        <img src="./img/05.webp" alt="">
    </div>
    </div>
`;
}
