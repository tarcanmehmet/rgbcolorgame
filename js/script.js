var newGame = document.getElementById("playAgain");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var box = document.getElementsByClassName("box");
var right;
var gameInfo = document.getElementById("gameInfo");
var jumbotron = document.querySelector(".jumbotron");


function startFunction(){
	red.textContent = Math.floor((Math.random() * 255) );
	green.textContent = Math.floor((Math.random() * 255) );
	blue.textContent = Math.floor((Math.random() * 255) );

	var temp = Math.floor((Math.random() * 5) );
	for(var i=0; i<box.length; i++){
		if(i == temp){
			box[i].style.backgroundColor = "rgb(" + Number(red.innerText) + "," + Number(green.innerText) + "," + Number(blue.innerText) + ")";
			right = box[i].style.backgroundColor;
		}
		else{
			box[i].style.backgroundColor = "rgb(" + Math.floor((Math.random() * 255) ) + "," + Math.floor((Math.random() * 255) ) +","+ Math.floor((Math.random() * 255) )+")";
		}
	}
}

newGame.addEventListener("click", function(){
	startFunction();
	jumbotron.style.backgroundColor = "rgb(76, 126, 206)";
	gameInfo.textContent = "Please Make a Guess";
	gameInfo.style.color = "black";

});
startFunction();
box[0].addEventListener("click", function(){
	if(box[0].style.backgroundColor == right){
		gameInfo.textContent = "Correct!";
		for(var j=0; j < box.length; j++){
			box[j].style.backgroundColor = right;
		}
		jumbotron.style.backgroundColor = right;
		gameInfo.style.color = "black";
	}
	else{
		gameInfo.textContent = "Try again";
		gameInfo.style.color = box[0].style.backgroundColor;
		box[0].className += " nottrue";
		box[0].style.backgroundColor = "rgb(44, 45, 48)";
		
	}
});
box[1].addEventListener("click", function(){
	if(box[1].style.backgroundColor == right){
		gameInfo.textContent = "Correct!";
		for(var j=0; j < box.length; j++){
			box[j].style.backgroundColor = right;
		}
		jumbotron.style.backgroundColor = right;
		gameInfo.style.color = "black";
	}
	else{
		gameInfo.textContent = "Try again";
		gameInfo.style.color = box[1].style.backgroundColor;
		box[1].className += " nottrue";
		box[1].style.backgroundColor = "rgb(44, 45, 48)";
		
	}
});
box[2].addEventListener("click", function(){
	if(box[2].style.backgroundColor == right){
		gameInfo.textContent = "Correct!";
		for(var j=0; j < box.length; j++){
			box[j].style.backgroundColor = right;
		}
		jumbotron.style.backgroundColor = right;
		gameInfo.style.color = "black";
	}
	else{
		gameInfo.textContent = "Try again";
		gameInfo.style.color = box[2].style.backgroundColor;
		box[2].className += " nottrue";
		box[2].style.backgroundColor = "rgb(44, 45, 48)";
		
	}
});
box[3].addEventListener("click", function(){
	if(box[3].style.backgroundColor == right){
		gameInfo.textContent = "Correct!";
		for(var j=0; j < box.length; j++){
			box[j].style.backgroundColor = right;
		}
		jumbotron.style.backgroundColor = right;
		gameInfo.style.color = "black";
	}
	else{
		gameInfo.textContent = "Try again";
		gameInfo.style.color = box[3].style.backgroundColor;
		box[3].className += " nottrue";
		box[3].style.backgroundColor = "rgb(44, 45, 48)";
		
	}
});
box[4].addEventListener("click", function(){
	if(box[4].style.backgroundColor == right){
		gameInfo.textContent = "Correct!";
		for(var j=0; j < box.length; j++){
			box[j].style.backgroundColor = right;
		}
		jumbotron.style.backgroundColor = right;
		gameInfo.style.color = "black";
	}
	else{
		gameInfo.textContent = "Try again";
		gameInfo.style.color = box[4].style.backgroundColor;
		box[4].className += " nottrue";
		box[4].style.backgroundColor = "rgb(44, 45, 48)";
		
	}
});
box[5].addEventListener("click", function(){
	if(box[5].style.backgroundColor == right){
		gameInfo.textContent = "Correct!";
		for(var j=0; j < box.length; j++){
			box[j].style.backgroundColor = right;
		}
		jumbotron.style.backgroundColor = right;
		gameInfo.style.color = "black";
	}
	else{
		gameInfo.textContent = "Try again";
		gameInfo.style.color = box[5].style.backgroundColor;
		box[5].className += " nottrue";
		box[5].style.backgroundColor = "rgb(44, 45, 48)";
		
	}
});


