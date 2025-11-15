// function add() {
//   return 2 + 2;
// }

// console.log(add());

// console.log(Document.body);

console.log(document.getElementsByTagName("h1").item(0).innerHTML);

function clickHandler() {
  //   alert("Hello World");
  //   console.log("Hello World");
  document.getElementsByTagName("h1").item(0).innerHTML = "Hello World";
  document.getElementsByTagName("button").item(0).innerHTML = "Clicked!";
  document.getElementsByTagName("button").item(0).style.backgroundColor = "red";
  document.getElementsByTagName("button").item(0).style.color = "white";
  document.getElementsByTagName("button").item(0).style.border =
    "1px solid white";

  userName = document.getElementById("Name").value;
  userEmail = document.getElementById("Email").value;
  userMessage = document.getElementById("Message").value;

  output =
    "Name: " + userName + "\nEmail: " + userEmail + "\nMessage: " + userMessage;

  document.querySelector(".output").innerText = output;
  document.querySelector(".output").style.display = "block";
  document.getElementsByTagName("button").item(0).innerHTML = "Click Me";

  //   document.getElementsByTagName("button").item(0).style.display = "none";
}

// document.getElementsByTagName("button").item(0).onclick = clickHandler;
// OR
// document.querySelector("button").onclick = clickHandler;
// OR
// document.querySelector("button").addEventListener("click", clickHandler);
