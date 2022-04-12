console.log('Hello World!');
const element = document.getElementById("op");
setInterval(function() {element.innerHTML += op +
" i love you &#10084 <br/>"}, .001);

let op = prompt("Please enter your Nickname ","Nickname")
   if (op != null){
      document.getElementById("op").innerHTML = ('')
   }