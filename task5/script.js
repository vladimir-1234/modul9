const input = document.getElementById("input");
const duplicateField = document.getElementById("duplicateField");
input.addEventListener('keydown', () => {
	
	duplicateField.innerHTML=input.value;

})
const buttom = document.getElementById("buttom");
buttom.addEventListener('click', () => {
	
	console.log(duplicateField.textContent);
	duplicateField.innerHTML = "";
	input.value = "";

})