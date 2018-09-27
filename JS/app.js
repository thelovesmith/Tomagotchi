console.log('JS is active')

class myTomagotchi {
	constructor(name){
		this.name = name;
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0; 
		this.alive = true;
		//binding 'this' to the class methods//
		this.feedPet = this.feedPet.bind(this);
		this.sleepyTime = this.sleepyTime.bind(this);
		this.funTime = this.funTime.bind(this);
		this.trainTime = this.trainTime.bind(this)
	}
	// nameIt(){
	// 	$('#name').text(`Name: ${this.name}`)
	// }
	hungry(){
		this.hunger++
		$('#hunger > p').text(this.hunger)
		$('.meat').removeAttr('src')
		$('.meat').removeAttr('style')
	}
	sleepy(){
		this.sleepiness++
		$('#sleep > p').text(this.sleepiness);
		$('.zzz').removeAttr('src')
		$('.zzz').removeAttr('style')
	}
	boring(){
		this.boredom++
		$('#bored > p').text(this.boredom);
		$('.ball').removeAttr('src')
		$('.ball').removeAttr('style')
	}
	aging(){
		this.age++
		$('#age > p').text(this.age)	
	}
	feedPet(){
		// console.log('this context in feed method', this)
		this.hunger--
		$('#hunger > p').text(this.hunger)
		const $img = $('.meat')
		$img.attr('src', 'Images/meat.png')
		$img.velocity('transition.bounceOut', 2000)
		const $myPet = $('.mypet')
		$myPet.velocity('callout.shake', 1000)
		console.log('its working')
		
	}
	sleepyTime(){
		this.sleepiness -= 3
		$('#sleep > p').text(this.sleepiness);
		const $img = $('.zzz')
		$img.attr('src', 'Images/zzz.png')
		$img.velocity('transition.bounceOut', 2000)
		console.log('its working')
		const $myPet = $('.mypet')
		$myPet.velocity('transition.fadeIn', 1000)
	}
	funTime(){
		this.boredom--
		$('#bored > p').text(this.boredom);
		const $img = $('.ball')
		$img.attr('src', 'Images/ball.png')
		$img.velocity('transition.bounceOut', 2000)
		console.log('its working')
		const $myPet = $('.mypet')
		$myPet.velocity('callout.tada', 1000)
	}
	trainTime(){
		this.hunger -= 2
		this.sleepiness += 2
		this.boredom -= 3
		// this.age += 1
		$('#hunger > p').text(this.hunger)
		$('#sleep > p').text(this.sleepiness);
		$('#bored > p').text(this.boredom);
		// $('#age > p').text(this.age);
		const $img = $('.train')
		$img.attr('src', 'Images/punchBag.png')
		$img.velocity('transition.bounceOut', 2000)
		console.log('is working')
		const $myPet = $('.mypet')
		$myPet.velocity('callout.swing', 1000)
	}


}
            



const startGame = (/*name*/) => {
	let name = prompt(`What is your Tomagotchi's name?`)
	pet = new myTomagotchi(name);
	
	const $myPet = $('.mypet')
	$myPet.attr('src', 'Images/carvanha.png')
	$myPet.width(400).height(400)
			

	const $name = $('<p />').text(pet.name)
	const $hunger = $('<p />').text(pet.hunger)
	const $sleepiness = $('<p />').text(pet.sleepiness)
	const $boredom = $('<p />').text(pet.boredom)
	const $age = $('<p />').text(pet.age)
	$('#name').append($name)
	$('#hunger').append($hunger)
	$('#sleep').append($sleepiness)
	$('#bored').append($boredom)
	$('#age').append($age)

	




	const ageInterval = setInterval(() => {
		pet.aging()
		if (pet.age === 10) {
	  	alert('Your Tomagotchi has evolved!!')
			$('.mypet').attr('src', 'Images/Sharpedo1.png')
			const $myPet = $('.mypet')
			$myPet.velocity('callout.flash', 1000)
			console.log('it worked')
  	}
  	if (pet.age === 20) {
	  	alert('Your Tomagotchi has evolved!!')
	  	$('.mypet').attr('src', 'Images/megaSharpedo.png')
	  	const $myPet = $('.mypet')
			$myPet.velocity('callout.flash', 1000)
  	}
	}, 10000 );
	
	const hungerInterval = setInterval(() => {
		pet.hungry()
		if (pet.hunger === 5) {
			alert(`${name} is getting hungry!! Please provide nourishment!`)
		}
		if (pet.hunger === 10) {
	  	alert('Your Tomagotchi has died!!')
	  	$('.mypet').attr('src', 'Images/bones1.png')
	  	deadTomagotchi()
	  	clearInterval(hungerInterval)
	  	clearInterval(ageInterval)
	  	clearInterval(sleepinessInterval)
			clearInterval(boredomInterval)
		 }
	}, 10000 );
	
	const sleepinessInterval = setInterval(() => {
		pet.sleepy()
		if (pet.sleepiness === 5) {
			alert(`${name} is getting tired! Please take off the lights!`)
		}
		if (pet.sleepiness >= 10) {
  	alert('Your Tomagotchi has died!!')
  	$('.mypet').attr('src', 'Images/bones1.png')
  	deadTomagotchi()
  	clearInterval(sleepinessInterval)
  	clearInterval(hungerInterval)
  	clearInterval(ageInterval)
  	clearInterval(boredomInterval)
  	console.log('it worked')

  }
	}, 12000 );
	const boredomInterval = setInterval(() => {
		pet.boring()
		if (pet.boredom === 5) {
			const $myPet = $('.mypet')
		$myPet.velocity('callout.bounce', 1000)
		alert(`${name} is bored!! You've been neglecting them`)
		}
		if (pet.boredom === 10) {
  	alert('Your Tomagotchi has died!!')
  	$('.mypet').attr('src', 'Images/bones1.png')
  	deadTomagotchi()
  	clearInterval(boredomInterval)
  	clearInterval(sleepinessInterval)
  	clearInterval(hungerInterval)
  	clearInterval(ageInterval)

  }
	}, 7000);


	  const $feedButton = $('#feed > button');
	$feedButton.on('click', pet.feedPet)

	const $sleepButton = $('#lights > button');
	$sleepButton.on('click', pet.sleepyTime)

	const $funButton = $('#play > button');
	$funButton.on('click', pet.funTime)

	const $trainButton = $('#train > button');
	$trainButton.on('click', pet.trainTime)


	
	// $myPet.velocity('callout.swing', 6000)

// 	$myPet.velocity({
// 	perspective: [215, 50],
// 	rotateY: 180,
// 	translateX: 80,
// 	opactiy: [1, 0.55],
// 	// height: '+=350'
// }, {
// 	duration: 10000,
// 	loop: 10,
// 	delay: 20
// });

	function anime() {
	    // $myPet.velocity('callout.shake', 8000, anime);
	    $myPet.velocity({
			perspective: [215, 50],
			// rotateZ: 30,
			translateX: [-100, 100],
			opactiy: [1, 0.55],
			// height: '+=350'
			}, {
				duration: 1000,
				loop: 10,
				delay: 20
			},);
	}
	
	// anime()
}


const deadTomagotchi = () => {
	
	

	$('#hunger > p').remove();
	$('#sleep > p').remove();
	$('#bored > p').remove();
	$('#age > p').remove();
	$('#name > p').remove();
}

const $startGame = $('#start > button');
$startGame.on('click', startGame)

// startGame(prompt(`What is your Tomagotchi's name?`));


// Create a game OBJECT that controls the methods in the game. It will give you more control over the gameplay. 







