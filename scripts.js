//Adding button

$('<input type="button" value="toggle" id="toggleButton">').insertAfter('#disclaimer');

//Programming logics

$('#toggleButton').click(function(){
    $('#disclaimer').toggle();
    
    if ($('#disclaimer').is(':visible')) {$(this).val('Hide');}else{$(this).val('Show');}
    
});