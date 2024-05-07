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

slides.forEach((elemento) => {
	slide.innerHTML = `
    <div class="row">
    <div class="col-img">
        <img src="./img/${elemento.percorso}" alt="">
        <div class="absolute">
            <h4>${elemento.titolo}</h4>
            <p>${elemento.descrizione}</p>
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
});
