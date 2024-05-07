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

let slide = document.getElementById(`slide`);

slide.innerHTML = `
        <img src="./img/${slides[0].percorso}" alt="">
        <div class="absolute">
            <h4>${slides[0].titolo}</h4>
            <p>${slides[0].descrizione}</p>
        </div>
`;

let slideActive = 0;

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

document.getElementById(`next`).addEventListener(`click`, function () {
	if (slideActive < 4) {
		slideActive++;
		slide.innerHTML = stampaSlide();
	} else {
		slideActive = 0;
		slide.innerHTML = stampaSlide();
	}
});

document.getElementById(`prev`).addEventListener(`click`, function () {
	if (slideActive > 0) {
		slideActive--;
		slide.innerHTML = stampaSlide();
	} else {
		slideActive = 4;
		slide.innerHTML = stampaSlide();
	}
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
