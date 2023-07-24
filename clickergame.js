var gold = 0;
var clickpower = 1;
var clkpowBtn = false;
//var clickpowUPcost = clickpower * 5;

function buttonClicked() {
	gold +=clickpower; 
	if (gold === 20 && !clkpowBtn) {
		increaseClickPower();
	}
	document.getElementById('gold').textContent = gold;
}

function increaseClickPower() {
	const clickPowerButton = document.createElement('button');
	clickPowerButton.textContent = 'Click here to increase your Click power by ' +clickpower+'. Costs '+clickpower*5+' gold';
	clickPowerButton.onclick = function() {
		clickpowerUp()
	}
	
	document.getElementById('clickpowerButton').appendChild(clickPowerButton);
	clkpowBtn = true;
}

function clickpowerUp() {
	// reduce gold by amount that scales with total clickpower level
	if (gold >= (clickpower * 5)) {
		gold = gold - (clickpower * 5);
		clickpower++;
	} else {
		alert("You don't have enough gold to buy this upgrade!");		
	}
	document.getElementById('gold').textContent = gold;
}
