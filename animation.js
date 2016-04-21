//Adding button

$('<input type="button" value="toggle" id="toggleButton">').insertAfter('#disclaimer');

//Adding Buttom Before div...
//$('<input type="button" value="toggle" //id="toggleButton">').insertBefore('#disclaimer');

//Programming logics
//fade effect
$('#toggleButton').click(function(){
    //$('#disclaimer').slideToggle('slow');
    
    $('#disclaimer').fadeToggle('slow');
    
    if ($('#disclaimer').is(':visible')) {$(this).val('Hide');}else{$(this).val('Show');}
    
});

//inserting elements inside the element
$('<strong>START!<strong/>').prependTo('#disclaimer');
$('<strong>STOP!<strong/>').appendTo('#disclaimer');

//Short-hand syntax Does not work
//$('<div>'.{
//    id:'specialButton',
//    text:'Click Me!',
//    click: function(){
//    alert("Advanced jQuery!")
//}
//}).insertBefore('#disclaimer');

//Context Modification
$('p').html('<strong>Warning!<strong/>Text has been modifed');
$('h2').text('Title elements has been modified');
//var userName =prompt('Please, enter you name..');
//$('#disclaimer').text('Welcome '+userName);

