var myNodelist = document.getElementsByTagName("li");
var error = document.querySelector('.error');
const add = document.querySelector('.add');
const inputCon = document.querySelector('.form-control');
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
var li = document.createElement("li");

var errortext = "Please input a Tittle";

// create close btn 
for(let a = 0; a < myNodelist.length; a++){
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[a].appendChild(span);
}
  
  var closes = document.getElementsByClassName("close");
  function myClose(){
    for (var i = 0; i < closes.length; i++) {
      closes[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  myClose();
  

//  click to add 
add.addEventListener('click', function(){
    var inputMatch = inputCon.value;
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    var txtNode = document.createTextNode(inputMatch);
    var li = document.createElement("li");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(txtNode);
    li.appendChild(span);

    if (inputMatch === '') {
        error.textContent = errortext;
      } else {
        document.getElementById("myUL").appendChild(li);
        error.textContent = "";
      }
      inputCon.value = "";
      myClose();
})




  