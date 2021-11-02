let inst = document.getElementById('inst');
inst.addEventListener('click', function(){
	let inp = document.getElementById('name').value;
	let inn = document.getElementById('email').value;

	if (inp === '') {
		let all = document.getElementById('all');
		all.style.display = 'none';
		let login = document.getElementById('login');
		login.style.display = 'block';
	}
	if (inn === '') {
		let all = document.getElementById('all');
		all.style.display = 'none';
		let login = document.getElementById('login');
		login.style.display = 'block';
	}

	else {
	let all = document.getElementById('all');
	all.style.display = 'block';
	let login = document.getElementById('login');
	login.style.display = 'none';
	let body = document.getElementById('body');
	body.style.background = '#ebebeb';
	}
});
let user = document.getElementById('user');
user.addEventListener('click', function(){
	let card = document.getElementById('card');
	card.style.display = 'none';
	let gr = document.getElementById('gr');
	gr.style.display = 'block';
	// let logo2 = document.getElementById('logo2');
	// logo2.style.display = 'none';
	let sr = document.getElementById('sr');
	sr.style.display = 'none';
});
let bump = document.getElementById('bump');
bump.addEventListener('click', function(){
	let card = document.getElementById('card');
	card.style.display = 'block';
	let gr = document.getElementById('gr');
	gr.style.display = 'none';
	let logo2 = document.getElementById('logo2');
	logo2.style.display = 'block';
	let sr = document.getElementById('sr');
	sr.style.display = 'none';
	myc.style.left = '366px';
	myc.style.borderBottom = '4px solid #000';
	oth.style.left = '700px';
	oth.style.borderBottom = 'none';
	let gg = document.getElementById('gg');
	gg.style.display = 'none';


});
let oth = document.getElementById('oth');
oth.addEventListener('click', function(){
	let myc = document.getElementById('myc');
	myc.style.left = '10px';
	let card = document.getElementById('card');
	card.style.display = 'none';
	myc.style.borderBottom = 'none';
	myc.style.display = 'block';
	oth.style.left = '370px';
	oth.style.borderBottom = '4px solid #000';
	let gg = document.getElementById('gg');
	gg.style.display = 'block';
	gg.style.left = '700px';
	gg.style.borderBottom = 'none';
	let sr = document.getElementById('sr');
	sr.style.display = 'block';
	let gr = document.getElementById('gr');
	gr.style.display = 'none';
	
});
let myc = document.getElementById('myc');
myc.addEventListener('click', function(){
	myc.style.left = '366px';
	let card = document.getElementById('card');
	card.style.display = 'block';
	myc.style.borderBottom = '4px solid #000';
	oth.style.left = '700px';
	oth.style.borderBottom = 'none';
	let gg = document.getElementById('gg');
	gg.style.display = 'none';
	let sr = document.getElementById('sr');
	sr.style.display = 'none';
	let gr = document.getElementById('gr');
	gr.style.display = 'none';
});


let gg = document.getElementById('gg');
gg.addEventListener('click', function(){
	let myc = document.getElementById('myc');
	myc.style.display = 'none';
	let card = document.getElementById('card');
	card.style.display = 'none';
	let sr = document.getElementById('sr');
	sr.style.display = 'none';
	oth.style.left = '10px';
	oth.style.borderBottom = 'none';
	let gg = document.getElementById('gg');
	gg.style.display = 'block';
	gg.style.left = '370px';
	gg.style.borderBottom = '4px solid #000';
	let gr = document.getElementById('gr');
	gr.style.display = 'block';
});

function notifyMe () {
		var notification = new Notification ("Все еще работаешь?", {
			tag : "ache-mail",
			body : "Пора сделать паузу и отдохнуть",
			icon : "1.jpg"
		});
	}
	
	function notifSet () {
		if (!("Notification" in window))
			alert ("Ваш браузер не поддерживает уведомления.");
		else if (Notification.permission === "granted")
			setTimeout(notifyMe, 2000);
		else if (Notification.permission !== "denied") {
			Notification.requestPermission (function (permission) {
				if (!('permission' in Notification))
					Notification.permission = permission;
				if (permission === "granted")
					setTimeout(notifyMe, 2000);
			});
		}
	}
