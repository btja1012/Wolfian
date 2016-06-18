
 var list=== []; 
 $('#Button').on('click', function(){
    var text = $('#text').val();
    
    if (text){
        $('ol').append('<li>' + list.push(text) + '</li>')
    }
     else{
        alert('debe incluir el texto')
     }    
});