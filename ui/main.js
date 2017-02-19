//console.log('Loaded!');
//counter coding
var button= document.getElementById('counter');

button.onclick = function()
{     
    // create the request obj
    var request = new XMLHttpRequest();
    //capture the response and stored it in variable
    request.onreadystatechange = function(){
        if(request.readysate === XMLHttpRequest.Done){
      // take same action
      if(request.status ===200){
          var counter = request.responseText;
           var span = document.getElementById('count');
              span.InnerHTML = counter.toString();
          }
        }
        //not done
    };

   // make the request
   request.open('GET','http/nikjoshi800.imad.hasura-app.io/counter',true);
   request.send(null);
};
// input name
var nameInput=document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make the request to the server and send the name
    
     //capture the list of name
     var name =['name1','name2','name3'];
     var list ='';
     for(var i =0; i<name.length;i++){
         list += '<li>'+ name[i]+'</li>';
          }
     var ul =document.getElementById('namelist');
        ur.InnerHTMl=list;
    
};