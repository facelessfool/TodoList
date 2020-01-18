

$('ul').on("click","li",function(){
	
	$(this).toggleClass("done");
	

});


$('ul').on("click","span",function(event){

$(this).parent().fadeOut(500,function(){
	$(this).remove();
});
event.stopPropagation();
});



$("input[type='text']").on("keypress",function(event){
	if(event.which===13){
		var newTask =$('input').val();
		$('ul').append("<li> <span><i class='fas fa-trash-alt'></i></span> "+newTask+"</li>");
		$('input').val("");
	}


});

$('.fa-plus-square').on("click",function(){
	$("input[type='text'").fadeToggle();

})