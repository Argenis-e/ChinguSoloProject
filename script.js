// Pet constructor, tho it is only used once, it could serve a purpose in the future 

function Pet(Name, Health, Hunger, Happiness) {
	this.name= Name;
	this.health= Health;
	this.hunger= Hunger;
	this.happiness= Happiness;
	this.age= 0;
}
let age;

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
// This is for the game to start in 10 seconds after the first prompt
setTimeout(function(){
	setInterval(function() {
		ADayGoesBy();
	}, 2500);
}, 10000);


function ADayGoesBy(){
	age = parseInt(document.getElementById('time').innerHTML); // This segment allows the website to update the days and age of the pet in a correct type format --/
	age++;
	document.getElementById('time').innerHTML = age;
	document.getElementById('Age').innerText = age + " days old";
	this.age += 1;

	/* I think the best thing to do here is to use the functions already established, but I figured that might have an impact in the future
	So I decided to just "bruteforce" it */
	hunger = document.getElementById('HungerBar'); 
	hunger.value += 10;
	this.hunger = hunger.value;

	health = document.getElementById('HealthBar');
	health.value -= 10;
	this.health = health.value;

	happiness = document.getElementById('HappinessBar');
	happiness.value -= getRandom(1, 60);
	this.happiness = happiness.value;

	// END GAME MESSAGE 

	if(this.health == 0){ 
		alert("Your pet has died!");
		alert("Game restart!");
		window.location.reload();
		GameStart();
	}
}

	// Functions to interact with the Pet 

function FeedingTime(){
	hunger = document.getElementById('HungerBar');
	hunger.value -= 10;
	this.hunger = hunger.value;
}

function CleaningTime(){
	health = document.getElementById('HealthBar');
	health.value += 10;
	this.health = health.value;
}

function PlayTime(){
	happiness = document.getElementById('HappinessBar');
	happiness.value += 10;
	this.happiness = happiness.value;
}

	// Honestly, the onbeforeunload does not seem to work, it just displays the default prompt, but the rest of the function is executed properly.
function ReStart(){
	window.onbeforeunload = function() {
		return "Your pet's stats will return to default, do you want to continue?";
	};
	window.location.reload();
	GameStart();
}

	// Function that sets the pet's name from the user input on their first session and sets its stats to default values.
	
function GameStart(){
    let name = sessionStorage.getItem('name');
    let hunger = 10;
    let health = 90;
    let happiness = 50;

    if (name === null) {
        name = prompt("Please enter your pet's name");
    }

    if (name != null) {
        document.getElementById("PetsName").innerText = name;
        sessionStorage.setItem('name', name);
    } else {
        GameStart();
    }
    const NewPet = new Pet(name, hunger, health, happiness);
    document.getElementById('Age').innerText = NewPet.age + " days old";
    document.getElementById('HungerBar').value = NewPet.hunger;
    document.getElementById('HealthBar').value = NewPet.health;
    document.getElementById('HappinessBar').value = NewPet.happiness;
};

