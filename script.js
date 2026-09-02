function toFahrenheit(celsius) {
	return Number(((celsius * 9 / 5) + 32).toFixed(2));
}

//Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
