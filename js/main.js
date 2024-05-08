// creo array di oggetti
let slides = [
	{
		percorso: "01.webp",
		titolo: "Titolo img",
		descrizione: "descrizione dell'immagine",
	},
	{
		percorso: "02.webp",
		titolo: "Titolo img",
		descrizione: "descrizione dell'immagine",
	},
	{
		percorso: "03.webp",
		titolo: "Titolo img",
		descrizione: "descrizione dell'immagine",
	},
	{
		percorso: "04.webp",
		titolo: "Titolo img",
		descrizione: "descrizione dell'immagine",
	},
	{
		percorso: "05.webp",
		titolo: "Titolo img",
		descrizione: "descrizione dell'immagine",
	},
];

// variabile per elemento della pagina dove andranno le slide
let slide = document.getElementById(`slide`);

// imposto la prima immagine che si dovrà vedere all'apertura della pagina
slide.innerHTML = `
        <img src="./img/${slides[0].percorso}" alt="">
        <div class="absolute">
            <h4>${slides[0].titolo}</h4>
            <p>${slides[0].descrizione}</p>
        </div>
`;

// variabile per slide attiva
let slideActive = 0;

// variabile per elemento che contiene thumbnails
let thumbNails = document.getElementById(`thumb`);

// stampo le thumbnails
stampaThumb(slides);

// array per le immagini miniature
let thumb = document.querySelectorAll(".col-thumb img");

// richiamo funzione che aggiunge eventlistener ad ogni thumb
aggiungiClick(thumb);

// al click su bottone next le slide vanno avanti
document.getElementById(`next`).addEventListener(`click`, function () {
	if (slideActive < slides.length - 1) {
		slideActive++;
		slide.innerHTML = stampaSlide();
	} else {
		slideActive = 0;
		slide.innerHTML = stampaSlide();
	}
});

// al click su bottone prev le slide vanno indietro
document.getElementById(`prev`).addEventListener(`click`, function () {
	if (slideActive > 0) {
		slideActive--;
		slide.innerHTML = stampaSlide();
	} else {
		slideActive = slides.length - 1;
		slide.innerHTML = stampaSlide();
	}
});

// interval per far andare avanti le slide ogni tot secondi
let myInterval;
document.getElementById(`autoplay`).addEventListener(`click`, function () {
	clearInterval(myIntervalReverse);
	myInterval = setInterval(() => {
		if (slideActive < slides.length - 1) {
			slideActive++;
			slide.innerHTML = stampaSlide();
		} else {
			slideActive = 0;
			slide.innerHTML = stampaSlide();
		}
	}, 1000);
});

// interval per far andare indietro le slide ogni tot secondi
let myIntervalReverse;
document.getElementById(`reverse`).addEventListener(`click`, function () {
	clearInterval(myInterval);
	myIntervalReverse = setInterval(() => {
		if (slideActive > 0) {
			slideActive--;
			slide.innerHTML = stampaSlide();
		} else {
			slideActive = slides.length - 1;
			slide.innerHTML = stampaSlide();
		}
	}, 1000);
});

// al click interrompo gli interval
document.getElementById(`stop`).addEventListener(`click`, function () {
	clearInterval(myInterval);
	clearInterval(myIntervalReverse);
});
