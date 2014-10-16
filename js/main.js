doccument.addEventListener("DOMCONTENTLOADED", function{
	if (!("ontouchstart" in document.documentElement)) { 
		document.documentElement.className += " no-touch"; 	
	} else {
		var $menuLink = documet.querySelector('.menu-icon');
		$menuLink.addEventListener("click', function(){
		alert('This worked');
		});
});	

