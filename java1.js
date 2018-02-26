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
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});
$(document).ready(function(){
    $("textarea").keyup(function(){
        doIt();
    });
});

 	   function view(xsl) {var menu = document.getElementById('codeSelection'); var col3 = document.getElementById('col3'); var col9 = document.getElementById('col9'); if ( xsl == 1) {menu.setAttribute('class','nav nav-tabs bg-light justify-content-end '); col3.setAttribute('class','col-lg-3 order-2'); col9.setAttribute('class','col-lg-9 order-1'); } else if( xsl == 21) {menu.setAttribute('class','nav nav-tabs bg-light'); col3.setAttribute('class','col-lg-3 order-2'); col9.setAttribute('class','col-lg-9 order-12'); } }