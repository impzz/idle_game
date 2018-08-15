var population = 0;

function click(number) {
	population = population + 1;
	document.getElementByID("population").innerHTML = population;
}