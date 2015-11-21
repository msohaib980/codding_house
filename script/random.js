


function getRandomNumber(lower,upper){
	if (isNaN(lower) || isNaN(upper)){
		throw new Error("welll, on eentry or all is not a valid number")}

	return Math.floor(Math.random()*(upper-lower+1))+lower;
}
console.log(getRandomNumber("w",20))


prompt("what is your name")


