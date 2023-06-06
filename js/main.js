var countdownElement = document.getElementById('countdown');
var daysElement = document.getElementById('days');
var hoursElement = document.getElementById('hours');
var minutesElement = document.getElementById('minutes');
var secondsElement = document.getElementById('seconds');

var targetDate = new Date("2024-06-19T12:00:00");

function updateCountdown() {
	var currentDate = new Date();
	var timeRemaining = targetDate.getTime() - currentDate.getTime();

	if (timeRemaining <= 0) {
		countdownElement.innerHTML = '<div class="new_page"><p>Вот и всё... Новая страница жизни...</p><img src="./img/Live/me_end.jpg" alt=""></div>';
	} else {
		var seconds = Math.floor(timeRemaining / 1000) % 60;
		var minutes = Math.floor(timeRemaining / (1000 * 60)) % 60;
		var hours = Math.floor(timeRemaining / (1000 * 60 * 60)) % 24;
		var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

		daysElement.innerHTML = days + " " + getWordForm(days, ["день", "дня", "дней"]);
		hoursElement.innerHTML = hours + " " + getWordForm(hours, ["час", "часа", "часов"]);
		minutesElement.innerHTML = minutes + " " + getWordForm(minutes, ["минута", "минуты", "минут"]);
		secondsElement.innerHTML = seconds + " " + getWordForm(seconds, ["секунда", "секунды", "секунд"]);

		setTimeout(updateCountdown, 1000);
	}
}

function getWordForm(number, forms) {
	var cases = [2, 0, 1, 1, 1, 2];
	return forms[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

updateCountdown();
