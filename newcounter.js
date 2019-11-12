// The add button function

function add(a) {
	document.getElementById('pop').style.display = "block";

}

function cl() {
	document.getElementById('pop').style.display = "none";
}

// Time and Date section

function unstart() {
	var b = new Date();
var q = document.getElementById('wel').value;

 wel.value = b.toDateString() ;

var man = new Date();
var boy = document.getElementById('wel1').value;

 wel1.value = man.toLocaleTimeString() ;
 var t = setTimeout(unstart , 500);

}

// The category adding section

function include() {
document.getElementById('pop').style.display = "none";
	document.getElementById('totals').style.display= "block";

var array=[];

var m = Math.random();
var no = Math.floor(m*1000);
var w ="clp" + no;
console.log(w);


	
	var bo = document.getElementsByClassName("wept");
for (var i = 0; i < bo.length; i++) {
	array.push(bo[i].value);
}

	result.innerHTML += '<div id="'+w+no+'"><p>'+ gory.value+'<br> <input class="wept" type="number" id="'+w+'" disabled><br>'+cription.value+'<br> <button class="w3-button w3-white w3-border w3-border-red w3-round-large" onclick="ayo('+no+')"><i class="w3-panel fa fa-'+gory.value+'"> </i>+</button>   <button class="w3-button w3-white w3-border w3-border-red w3-round-large" onclick="ay('+no+')">-</button> '+'  <button class="w3-button w3-white w3-border w3-border-red w3-round-large" onclick="yo('+no+')"> <i class="fa fa-trash"></i></button></p></div>';


for (var i = 0; i < bo.length; i++) {
	bo[i].value = array[i];
	
}

if (gory.value == "" && cription.value == "") {
	alert('write the name of your category please');
	document.getElementById('totals').style.display= "none";

	result.innerHTML = '';
}
}


function ayo(a) {
	var r = "clp" + a;

document.getElementById(r).value = (++ document.getElementById(r).value)  ;
// alert("why");
 console.log(r);
}
function ay(a) {
	var we = "clp" +a;
	document.getElementById(we).value = (-- document.getElementById(we).value);
	if (document.getElementById(we).value <= 0) {
		document.getElementById(we).value = 0;

		alert('Hello""\nyou have reached the minimum length of the counter');

	}
	console.log(we);
}

function yo(a) {
	var tr = "clp" +a+a;
	console.log(tr);
document.getElementById(tr).style.display = "none";



}

function total(a) {
	var r = "clp" + a;

	for (var i = 0; i < r.length; i++) {
		r[i].value = Number(imp.value);
	}
	
  
  console.log(r);
}


// The history function section
function hist() {
	document.getElementById("history").style.display = "block";
	document.getElementById("myani").style.display = "none";
	document.getElementById("myanimate").style.display = "none";
	document.getElementById("hint").innerHTML = "Started at " + localStorage.getItem("startH") +"       "+ localStorage.getItem("startT") + "<br>";
	document.getElementById('prnt').style.display = 'block';
	
}	
function clw() {
	document.getElementById('history').style.display = 'none';
}
// end of history

// firstpage section
function start() {
	document.getElementById('firstp').style.display= "none";
	document.getElementById('allsec').style.display= "block";

// localStorage
var b = new Date();
var q = document.getElementById('wel').value;

 wel.value = b.toDateString() ;
 // wel1.value = man.toLocaleTimeString() ;
// localStorage.startH += q;

var man = new Date();
var boy = document.getElementById('wel1').value;

 wel1.value = man.toLocaleTimeString() ;
 
 localStorage.startT += q +"  " + boy +"<br>";

}


function Print() {
	window.print(document.getElementById('history'));
}







