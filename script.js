$(document).ready(function(){
  
 
});



function submit(){
var splante = document.getElementById("plante");
var slokation = document.getElementById("lokation");


addPlante(splante.value, slokation.value);
//console.log(splante.value +" "+ slokation.value);

}

function hentPlante(){
	
	var Plante = "Bregne";
	return Plante;
}

function hentLokation(){
	var Lokation = "have";
	return Lokation;
}
function hentFugtighed(){
	var Fugtighed = "55.2";
	return Fugtighed;
}
function getGUID(){
	return Math.floor((Math.random() * 1000) + 1);
}
function test(){
	console.log("metode kaldt!");
}

function addPlante(plante, lok){
	$("#planterVandes").append("<tr><td>"+plante+"</td><td>"+lok+"</td><td>"+hentFugtighed()+"</td></tr>");
	$("#allePlanter").append("<tr><td>"+plante+"</td><td>"+lok+"</td><td>"+hentFugtighed()+ "<td>"+getGUID()+"</td></tr>");
}
