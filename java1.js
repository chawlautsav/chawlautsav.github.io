
var eSheetsHTML = ace.edit("editor-HTML");
	eSheetsHTML.getSession().setMode("ace/mode/html");
	document.getElementById('editor-HTML').style.fontSize='15px';
	eSheetsHTML.session.setTabSize(3);
var eSheetsCSS = ace.edit("editor-CSS");
	eSheetsCSS.getSession().setMode("ace/mode/css");
	document.getElementById('editor-CSS').style.fontSize='16px';
	eSheetsCSS.session.setUseWrapMode(true);
var eSheetsJS = ace.edit("editor-JS");
	eSheetsJS.getSession().setMode("ace/mode/javascript");
	eSheetsJS.session.setUseWrapMode(true);
	document.getElementById('editor-JS').style.fontSize='14px';
	eSheetsJS.session.setTabSize(2);
$(document).ready(function()
{
    $('[data-toggle="popover"]').popover();   
    $("textarea").keyup(function(){
        doIt();
    });
});
 function doIt() {
 	var x = document.getElementById("output"); 
 	var y = (x.contentWindow || x.contentDocument);
 	y.close();
	if (y.document)y = y.document;
	 y.close(); 
	y.write(eSheetsHTML.getValue()); 
	y.write('<head> </head>');
	var headID = y.getElementsByTagName("head")[0];
	var newStyle = document.createElement("style");
	newStyle.type = "text/css";
	newStyle.innerHTML = eSheetsCSS.getValue();
	headID.appendChild(newStyle); var headID = y.getElementsByTagName("head")[0]; 
	var newScript = document.createElement("script"); 
	newScript.type = "text/javascript";
	newScript.innerHTML = eSheetsJS.getValue();
	headID.appendChild(newScript); 
 } 
function view(xsl) {var menu = document.getElementById('codeSelection'); var col3 = document.getElementById('col3'); var col9 = document.getElementById('col9'); if ( xsl == 1) {menu.setAttribute('class','nav nav-tabs bg-light justify-content-end '); col3.setAttribute('class','col-lg-3 order-2'); col9.setAttribute('class','col-lg-9 order-1'); } else if( xsl == 21) {menu.setAttribute('class','nav nav-tabs bg-light'); col3.setAttribute('class','col-lg-3 order-2'); col9.setAttribute('class','col-lg-9 order-12'); } }