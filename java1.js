// JavaScript Document
//var h1heading = document.querySelector('h1');
//myh1heading.textcontent = 'Hello World';

var myHeading = document.querySelector('h1');
myHeading.textContent = '###############';
var image = document.querySelector('img');
var bodyy = document.querySelector('body');
var title = document.querySelector('title');
image.onclick = function()
{
	var source = image.getAttribute('src');

	if(source == '1.jpg')
	{
		myHeading.textContent = 'PROJECT ALPHA';
		bodyy.setAttribute('bgcolor','#333333');
		image.setAttribute('src','cod.jpg');
		image.setAttribute('width','440'); 
		title.textContent = 'PROJECT ALPHA';
	}
	else if(source == 'cod.jpg' )
	{
		myHeading.textContent = '###############';
		image.setAttribute('src','1.jpg');
		bodyy.setAttribute('bgcolor','#CCCCCC');
		image.setAttribute('width','409');
		title.textContent = 'Untitled Document';
	}
	
	
}