//creating <p> element to add paragraph
var p =  document.createElement("p");
//adding text to p element
p.innerText = "The Document Object Model (DOM) is programming interface for HTML and XML documents. "+
"It represents the page so thatprograms can change the document structure, style, and content."+
"The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."
//adding color to text
p.style.color = "purple";
document.body.appendChild(p); //adding p element as child of body
               
var p2 = document.createElement("p")// creating another p element
p2.innerText = "A Web page is a document. This document can be either displayed in the browser"+ 
"window or as the HTML source. But it is the same document in both cases. "+
"The Document Object Model (DOM) represents that same document so it can be manipulated."+
" The DOM is an object-oriented representation of "+
"the web page, which can be modified with a scripting language such as Javascript."
p2.style.color = "red";
document.body.appendChild(p2);
document.body.style.backgroundColor = "rgb(207, 207, 209)"; //adding background color as light grey