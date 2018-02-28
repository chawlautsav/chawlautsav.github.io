$(document).ready(function()
{
	var code = $(".CM-html")[0];
	var editor1 = CodeMirror.fromTextArea(code, {
		lineNumbers : true,
		mode:  "xml",
		lineWrapping: true,
		scrollbarStyle : "overlay"
	} );
	editor1.setSize("100%", 550);
	var code1 = $(".CM-css")[0];
	var editor2 = CodeMirror.fromTextArea(code1, {
		lineNumbers : true,
		mode : "css",
		lineWrapping: true,
		scrollbarStyle : "overlay"
	} );
	editor2.setSize("100%", 550);
	var code2 = $(".CM-js")[0];
	var editor3 = CodeMirror.fromTextArea(code2, {
		lineNumbers : true,
		mode: "javascript",
		lineWrapping: true,
		scrollbarStyle : "overlay"
	} );

	editor3.setSize("100%", 550);
	function doIt()
	{
	 	var x = document.getElementById("output"); 
	 	var y = (x.contentWindow || x.contentDocument);

	 	if (y.document)y = y.document;
	 	y.close(); 
	 	y.write(editor1.getValue()); 
	 	y.write('<head> </head>');
		var headID = y.getElementsByTagName("head")[0];
		var newStyle = document.createElement("style");
		newStyle.type = "text/css";
		newStyle.innerHTML = editor2.getValue();
		headID.appendChild(newStyle); var headID = y.getElementsByTagName("head")[0]; 
		var newScript = document.createElement("script"); 
		newScript.type = "text/javascript";
		newScript.innerHTML = editor3.getValue();
		headID.appendChild(newScript); 
	} 
    $('[data-toggle="popover"]').popover();   
    $("textarea").keyup(function(){
        doIt();
    });
});
 function doIt() {
 	var x = document.getElementById("output"); 
 	var y = (x.contentWindow || x.contentDocument);

	if (y.document)y = y.document; y.close(); 
	y.write(document.getElementById("codeHTML").value); 
	y.write('<head> </head>');
	var headID = y.getElementsByTagName("head")[0];
	var newStyle = document.createElement("style");
	newStyle.type = "text/css";
	newStyle.innerHTML = document.getElementById("codeCSS").value;
	headID.appendChild(newStyle); var headID = y.getElementsByTagName("head")[0]; 
	var newScript = document.createElement("script"); 
	newScript.type = "text/javascript";
	newScript.innerHTML = document.getElementById("codeJavaScript").value;
	headID.appendChild(newScript); 
 } 

 	   function view(xsl) {var menu = document.getElementById('codeSelection'); var col3 = document.getElementById('col3'); var col9 = document.getElementById('col9'); if ( xsl == 1) {menu.setAttribute('class','nav nav-tabs bg-light justify-content-end '); col3.setAttribute('class','col-lg-3 order-2'); col9.setAttribute('class','col-lg-9 order-1'); } else if( xsl == 21) {menu.setAttribute('class','nav nav-tabs bg-light'); col3.setAttribute('class','col-lg-3 order-2'); col9.setAttribute('class','col-lg-9 order-12'); } }