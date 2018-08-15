var population = 0;

function click(number) {
	population = population + number;
	document.getElementByID("population").innerHTML = population;
}