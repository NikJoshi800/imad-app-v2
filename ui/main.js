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