function startTime(){
	var today = new Date();
	var currentHour = document.getElementById('hours');
	var currentMinute = document.getElementById('minutes');
	var currentSecond = document.getElementById('seconds');
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	if (hour > 12) {
		hour = hour - 12;
	}
	if (minute < 10) {
		minute = "0" + minute;
	}
	if (second < 10) {
		second = "0" + second;
	}
	document.getElementById('time').textContent = hour + " : " + minute + " : " + second;
	setTimeout(function() {
		startTime()
	}, 1000);
}

document.getElementById('time').addEventListener("onload", startTime(), false);