//toogle between Login and Register
$(function () {

	$('#login-form-link').click(function (e) {
		$("#login-form").delay(100).fadeIn(100);
		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function (e) {
		$("#register-form").delay(100).fadeIn(100);
		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

// //function to check for unique email
// function uniqueEmail() {
// 	var i = 0;
// 	var counterNumber = 0;
// 	var email = $('#email').val();
// 	// console.log("i entered email:: "+email);
// 	for (i = 0; i < localStorage.length; i++) {
// 		var itemkey = localStorage.key(i);
// 		var values = localStorage.getItem(itemkey);
// 		values = values.split(";");
// 		if (email == values[2]) {
// 			counterNumber++;
// 		}
// 	}
// 	console.log("counter: " + counterNumber);
// 	if (counterNumber > 0) {
// 		document.getElementById("email").setCustomValidity("Email is already registered with us!");
// 	} else {
// 		document.getElementById("email").setCustomValidity('');
// 	}
// }

// //function to check for unique contact number
// function uniqueNumber() {
// 	var counterNumber = 0;
// 	var number = $('#number').val();
// 	for (var i = 0; i < localStorage.length; i++) {
// 		var itemkey = localStorage.key(i);
// 		var values = localStorage.getItem(itemkey);
// 		values = values.split(";");
// 		if (number == values[3]) {
// 			counterNumber++;
// 		}
// 	}
// 	if (counterNumber > 0) {
// 		document.getElementById("number").setCustomValidity('Number is already registered!');
// 	} else {
// 		document.getElementById("number").setCustomValidity('');
// 	}
// }


//validate password and confirm-password match
function check(input) {
	if (input.value != document.getElementById('rpassword').value) {
		input.setCustomValidity('Password Must be Matching.');
	} else {
		input.setCustomValidity('');
	}
}
let user = {
	id: 0,
	fname: '',
	lname: '',
	email: '',
	number: '',
	password: ''
}

//local storage
//check if browser supports local storage
var i = 0;


//store details in local storage
function register() {
	event.preventDefault();
	console.log("inregister");
	var newDate = new Date();
	var values = new Array();
	var itemId = newDate.getTime();
	var fname = $('#fname').val();
	var lname = $('#lname').val();
	var email = $('#email').val();
	var number = $('#number').val();
	var password = $('#rpassword').val();
	// password = "hi";
	// var myPassword = "siefhreotwnjvdsnfrjbgi";
	// var encrypted = CryptoJS.AES.encrypt(password, myPassword);
	// var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
	// decrypted.toString(CryptoJS.enc.Utf8);
	// console.log(encrypted);
	// console.log(decrypted);

	user = {
		id: ++i,
		fname: fname,
		lname: lname,
		email: email,
		number: number,
		password: password
	}

	localStorage.setItem(user.id, JSON.stringify(user));
	console.log("inregisstored to localer");
	window.location = 'album.html';
	console.log("4");
}

//User login


function logg() {
	event.preventDefault();
	console.log("inlogin")
	var username = $('#username').val();
	var password = $('#password').val();
	let data = JSON.parse(localStorage.getItem(1));
	// document.getElementById('lo').innerHTML = data.email + data.password;
	// window.location = 'album.html';
	if (data.password == password && data.email == username) {
		window.location.replace('album.html');
	}

}
// setTimeout(() => {

// 	}
// 	1000);

//if brwoser doesn't support
// else {
// 	console.log("No support. Use a fallback such as browser cookies or store on the server.");
// }

//remember me functionality
//  	