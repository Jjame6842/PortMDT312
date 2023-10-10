const { text } = require("express");

var comment = [];
var i = 1;
function postFunction() {
    var text = document.getElementById("text1").value;
    comment[i] = document.getElementById("comment"+i);
    comment[i].innerHTML = text;
    this.i += 1;
    }

function clearFunction(){
    text.getElementById("text1").value;
    text ="";
    comment[1].innerHTML = "";
    comment[2].innerHTML = "";
    comment[3].innerHTML = "";
    i = 1;
}
