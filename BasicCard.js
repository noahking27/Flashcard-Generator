var inquirer = require("inquirer");


function Questions(front, back) {
	this.front = front;
	this.back = back;

}

var question1 = new Questions("Who was the only President to serve more than two terms?", "Franklin Roosevelt");
var question2 = new Questions("Who was the only President to serve two non-consecutive terms?", "Grover Cleveland");
var question3 = new Questions("Who was the oldest elected President?", "Donald Trump");
var question4 = new Questions("Who was the first President to live in the White House?", "John Adams");
var question5 = new Questions("Who was the first President to be impeached?", "Andrew Johnson");

module.exports = Questions;

var test = "testing";

module.exports = test;



var Ask = function () {

	console.log("Question #1: ");
	
	inquirer.prompt([
	{
		name: "first",
		message: question1.front
	},

	{
		name: "second",
		message: question2.front
	},

	{
		name: "third",
		message: question3.front
	},

	{
		name: "fourth",
		message: question4.front
	},

	{
		name: "fifth",
		message: question5.front
	}
		

		]).then(function(answers){
			console.log(question1.back);
			console.log(question2.back);
			console.log(question3.back);
			console.log(question4.back);
			console.log(question5.back);
		})

}

Ask();