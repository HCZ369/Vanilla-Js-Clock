//console.log("hola emmin, te quiero hija");
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
	const secondsDegrees = (seconds / 60) * 360;
	const minutesDegrees = (minutes / 60) * 360;
	const hoursDegrees = (hours / 12) * 360;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees + 90}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees + 90}deg)`;
}
setInterval(setDate, 1000);
