var currentIndex = 0;
var counter = 3;
var totalScore = 0;

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
  //var currentRating = option[value]; // is this how I pass in the rating value??

  totalScore+=parseInt($(this).val());
  counter--;
  // check to only proceed if we are not in the last array item
  if(counter==0){
    showScore();
  }
  switchPicture(currentIndex + 1);
});