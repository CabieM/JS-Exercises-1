$(document).ready(function(){
		//console.log

		var prize1 = "You Won A Car";
		var prize2 = "You Won A House";
		var prize3 = "You Won A Vacation";

		var doors = [prize1, prize2, prize3];

		var userResponse = prompt("Enter a number between 1 and 3");

		console.log(userResponse);

		/*if (userResponse == 1) {
			alert(prize1);


		}else if (userResponse == 2) {
			alert(prize2);
		}else if (userResponse == 3) {
			alert(prize3);
		}
		*/


		switch(userResponse){
		   case '1':
		      alert(prize1);
		      break;
		   case '2':
		      alert(prize2);
		      break;
		   case '3':
		      alert(prize3);
		    
}

console.log( greet );




	

});

