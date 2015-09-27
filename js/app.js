
$(document).ready(function(){
	/*--generate the number--*/
	icount=0;
	numgenerator();

	/*--Function to start a new game--*/
	var newgame=function ()
	{

		icount=0;
		message="Make your Guess!";
		$("h2#feedback").text(message);
		$("input#userGuess").val('');
		$("ul#guessList").empty();
		$("#count").text(icount);
	}
	/*--Function to generate a new number--*/
	function numgenerator()
	{
		numgen=Math.round(Math.random()*100 +1);
		return numgen;
	}
	/*--Function to guess and provide feedback--*/
	var feedback=function()
	{
		console.log(numgen);
		console.log(usergss);
		if (isNaN(parseInt(usergss)))
		{
			alert("You have entered an invalid number!!");
		}
		else{
				icount=icount+1;
				difference=Math.abs((numgen-usergss));
				message="";
				if (difference>=1 && difference<=10)
				{
					message="Very hot"
				}
				else if (difference>10 && difference<=20){
					message="Hot";
				}
				else if (difference>20 && difference<=30){
					message="warm";
				}
				else if(difference>30 && difference<=50){
					message="cold";
				}
				else if (difference === 0)
				{
					message="Just right";
				}
				else {
					message="Ice Cold"
				}
				return message;
			}
		}
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
		/*--start a newgame when new game is clicked--*/
		$("a.new").click(function(){
			newgame();
			//console.log(numgen);
		});
		/*--Make Userguess display result--*/
		$('#guessButton').click(function()
	{
			usergss=$("input#userGuess").val();
			$("h2#feedback").text(feedback());
			$("#count").text(icount);
			$("ul#guessList").append("<li>You guessed"+usergss+"</li>");
			//return false;
	});
});
