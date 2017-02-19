//console.log('Loaded!');
//counter coding
var button= document.getElementById('conter');
var counter = 0;
button.onclick = function(){
    counter = counter + 1;
    var span = document.getElementById('count');
    span.InnerHTML = count.toString();
};