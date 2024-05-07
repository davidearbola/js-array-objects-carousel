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

// variabile per elemento della pagina
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

// array per le immagini miniature
let thumb = document.querySelectorAll(".col-thumb img");

thumb[0].addEventListener(`click`, function () {
	slideActive = 0;
	slide.innerHTML = stampaSlide();
});

thumb[1].addEventListener(`click`, function () {
	slideActive = 1;
	slide.innerHTML = stampaSlide();
});

thumb[2].addEventListener(`click`, function () {
	slideActive = 2;
	slide.innerHTML = stampaSlide();
});

thumb[3].addEventListener(`click`, function () {
	slideActive = 3;
	slide.innerHTML = stampaSlide();
});

thumb[4].addEventListener(`click`, function () {
	slideActive = 4;
	slide.innerHTML = stampaSlide();
});

// al click su bottone next le slide vanno avanti
document.getElementById(`next`).addEventListener(`click`, function () {
	if (slideActive < 4) {
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
		slideActive = 4;
		slide.innerHTML = stampaSlide();
	}
});

// interval per far andare avanti le slide ogni tot secondi
let myInterval;
document.getElementById(`autoplay`).addEventListener(`click`, function () {
	clearInterval(myIntervalReverse);
	myInterval = setInterval(() => {
		if (slideActive < 4) {
			slideActive++;
			slide.innerHTML = stampaSlide();
		} else {
			slideActive = 0;
			slide.innerHTML = stampaSlide();
		}
	}, 1000);
});

// al click interrompo gli interval
document.getElementById(`stop`).addEventListener(`click`, function () {
	clearInterval(myInterval);
	clearInterval(myIntervalReverse);
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
			slideActive = 4;
			slide.innerHTML = stampaSlide();
		}
	}, 1000);
});

// slides.forEach((elemento) => {
// 	slide.innerHTML = `
//     <div class="row">
//     <div class="col-img">
//         <img src="./img/${elemento.percorso}" alt="">
//         <div class="absolute">
//             <h4>${elemento.titolo}</h4>
//             <p>${elemento.descrizione}</p>
//         </div>
//     </div>
//     <div class="col-thumb">
//         <img src="./img/01.webp" alt="">
//         <img src="./img/02.webp" alt="">
//         <img src="./img/03.webp" alt="">
//         <img src="./img/04.webp" alt="">
//         <img src="./img/05.webp" alt="">
//     </div>
//     </div>
//     `;
// });
