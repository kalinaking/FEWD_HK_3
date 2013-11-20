// 1 it is not good practice to insert so much html in one line...
// $("body").append("<img src='Will.jpg' alt='William\'s picture'><p>The instructor for this course is William Neely. William has a degree in Physics from Southwestern College.</p>");

// 1 the BETTER way to do this. a) make a variable for the html b) append the variable contents
var firstName = "William";
var lastName = "Neely";
var school = "Southwestern College";

var context = "<img src='Will.jpg' alt='" + firstName + "\'s picture'>" + 
				"<p>The instructor for this course is " + firstName + " " lastName + ". " +
				firstName + " has a degree in Physics from " + school + ".</p>"

$("body").append(context);


// 2 the ugly way to do this...use an ARRAY
// $("#container>ol").prepend("<li>Milk</li>");
// $("#container>ol").prepend("<li>Cookies</li>");
// $("#container>ol").prepend("<li>Sugar</li>");
// $("#container>ol").prepend("<li>Bananas</li>");
// $("#container>ol").prepend("<li>Gatorade</li>");

// 2 BETTER way - use an array and forEach function

var items = ["Milk", "Cookies", "Sugar", "Bananas", "Gatorade", "Apple"];
items.forEach(createLi);
function createLi(itemName){
	$("#container>ol").prepend("<li>" + itemName + "</li>");
}

// 3
// $("#container").css("width","960px");
// $("#container").css("background","red");
// $("#container").css("color","purple");
// $("#main").css("width","960px");
// $("#main").css("background","red");
// $("#main").css("color","purple");

//3 BETTER way

$("#container, #main").css({
	"width","960px",
	"background","red",
	"color","purple"
});

// 4
// $("input").css("width","200px")
// $("input").attr("placeholder","My placeholder");
// $("input").before("<label>My input</label>");

//4 the right way to do this ...link by dots

$("input").css("width","200px")
	.attr("placeholder","My placeholder")
	.before("<label>My input</label>");

