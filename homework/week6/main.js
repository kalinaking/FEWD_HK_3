
var numberMoves = 0;
var selected = 0; // maximum 2 
var width = 73;
var height = 98;
var val;
var suit;
var xPosition;


var cardsVal = []; // will have 13 values

var cardsSuit = []; // will have 4 values


// make each array value equal to the background-position displacement
for (var i = 0; i < 13; i++) {
	val = -(width * i) - 1;
	cardsVal.push(val);
}

for (var i = 0; i < 4; i++) {
	suit = -(height * i) - 1;
	cardsSuit.push(suit);
}
// shuffle all array elements to randomize

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array; 
}



$(document).ready(function(){
	cardsVal = shuffleArray(cardsVal);
	cardsSuit = shuffleArray(cardsSuit); // must somehow shuffle the cardsSuit while creating the cards
	insertCards();
});

function insertCards()	{
	cardsVal.forEach(function(value, index) {
		xPosition = value;
		cardsSuit.forEach(function(value, index) {
			$("#game-cards").append('<div class="cards"></div>');

			$('#game-cards .cards:last')
			  .css("background-position-y", value)
			  .css("background-position-x", xPosition);
		});
	});
}

// create #game-cards classes for "selected" "matched" 
// add class "selected"
// populate the #game-cards div with 26 divs with 13 matchs out of the 52 cards


// reset game when reset button clicked
// 1 reset all variables to zero
// set all divs to show card backs


// start game when start button clicked

// zoom in on the matching card when moused-over when cheat button clicked

// only listen for clicks on "back" cards...uncover a card when it is clicked 
// register click handler
// selected++;

// uncover a second card when it is clicked 
//(call function checking for match)

// function check for match

// if matched, keep both cards on -- add class matched -- disable clicks 

// add 1 to var numberMoves











// everything below is just to look at for syntax

// cardsVal.forEach(function(value, index)) {}

var images = [
  "http://lorempixel.com/output/food-q-c-480-480-1.jpg",
  "http://lorempixel.com/output/food-q-c-480-480-5.jpg",
  "http://lorempixel.com/output/food-q-c-480-480-4.jpg",
  "http://lorempixel.com/output/food-q-c-480-480-1.jpg",
  "http://lorempixel.com/output/food-q-c-480-480-8.jpg"
  ]

var imageNumber = images.length;
  

$('input[value="Skip"]').click(function(){
  switchPicture(currentIndex + 1);
});

// action when "back" button pressed
$('input[value="Back"]').click(function(){
  switchPicture(currentIndex - 1);
});
// call skip to next image function
function switchPicture(index) {
  currentIndex = index;
  console.log(images[currentIndex]);
  $('#image-to-vote-on').attr("src", images[currentIndex]); 
}
// action when score is chosen
function showScore() {
  alert("Your score is " + totalScore);
  
}

$('#your-vote').change(function(){

  totalScore+=parseInt($(this).val()); // add to the total score
  counter--;
  // check to only proceed if we are not in the last array item
  if(counter==0){
    showScore();
  }
  switchPicture(currentIndex + 1);
});
