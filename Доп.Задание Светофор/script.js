const trafficLightEl1 = document.querySelector('#trafficLight1');
function makeGreen() {
	trafficLightEl3.style.background = ('black');
    trafficLightEl1.style.background = ('green');
    trafficLightEl1.removeEventListener('click', makeGreen);
	trafficLightEl1.addEventListener('click', makeYellow);
}
trafficLightEl1.addEventListener('click', makeGreen);

const trafficLightEl2 = document.querySelector('#trafficLight2');
function makeYellow() {
	trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl2.removeEventListener('click', makeYellow);
	trafficLightEl1.addEventListener('click', makeRed);
}
trafficLightEl2.addEventListener('click', makeYellow);

const trafficLightEl3 = document.querySelector('#trafficLight3');
function makeRed() {
	 trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('red');
    trafficLightEl3.removeEventListener('click', makeRed);
	trafficLightEl1.addEventListener('click', makeGreen);
}

trafficLightEl3.addEventListener('click', makeRed);
