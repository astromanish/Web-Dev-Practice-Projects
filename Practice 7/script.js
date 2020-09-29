// document.querySelectorAll("#one")[0].addEventListener("mousemove", (e) =>
// {
//     document.getElementsByTagName("header")[0].style.background="rgb("+e.clientX+","+e.clientY+",40)"
// }); 


var d = document.createElement("div");

var txtNode = document.createTextNode("Hello World!");

console.log(txtNode);

console.log(d);

d.appendChild(txtNode);

d.className="column";
d.id="col";
d.setAttribute=("title","division");

// var header = document.getElementsByTagName("header")[0];

// header.appendChild("d");