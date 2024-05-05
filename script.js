let element = document.getElementById('word');
let written = document.getElementById('written');

let show_start = true;
let writing = true;
let word_count = 0;
let words = [];

document.addEventListener("keydown", function (event) {
	if (writing) {
		const key_name = event.key;
		if (key_name === ' ' || key_name === 'Enter') {
			words.push(element.innerHTML);
			word_count += 1;
			element.innerHTML = '';
		}
		else if (/^[a-zæøå]+$/.test(key_name)) {
			if (show_start) {
				element.innerHTML = '';
				show_start = false;
			}
			element.innerHTML += key_name;
		} else if (key_name === 'End') {
			writing = false;
			let date_now = new Date();
			words.push(element.innerHTML);
			word_count += 1;
			element.innerHTML = '';
			written.innerHTML = date_now.getFullYear() + '-' + (date_now.getMonth() + 1) + '-' + date_now.getDate() + '<br><br>';
			words.forEach(word => {
				written.innerHTML += word + ' ';
			});
		} else if (key_name === 'Backspace') {
			let line = element.innerHTML;
			element.innerHTML = line.slice(0, -1);
		}
	}
});