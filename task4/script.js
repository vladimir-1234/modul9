const changeLink = document.querySelector('#link');
let str = "";
changeLink.addEventListener('click', () => {
	str = prompt('ВВедите любые слова');
	changeLink.textContent = str;
})