$(document).ready(function() {

	//SNIFF BROWSER
	if ($.browser.msie) {
	    alert("This prototype works best with Chrome or Safari! You will see bugs if you continue.");
	 }
// record save function
    $("#name").click(function () { 
    	$('#name').hide();
    	$('#resetname').show();   
		$(".name").fadeOut(function() {
		   $("input.first-name").val("Joseph P");
		   $("input.last-name").val("Kennedy");
		   $(".name").fadeIn();
		});		
   });
   $('#resetname').click(function(){
    	$('#name').show();
    	$('#resetname').hide(); 
   		$(".name").fadeOut(function() {
   			$("input.name").each(function() {
       		$(this).val($(this).data('original'));
   			});
   		$(".name").fadeIn();
		});    	   	
	});
    $("#date").click(function () { 
    	$('#date').hide();
    	$('#resetdate').show();   
		$(".date").fadeOut(function() {
		   $("input.date").val("abt 1861");
		   $(".date").fadeIn();
		});		
   });
   $('#resetdate').click(function(){
    	$('#date').show();
    	$('#resetdate').hide(); 
   		$(".date").fadeOut(function() {
   			$("input.date").each(function() {
       		$(this).val($(this).data('original'));
   			});
   		$(".date").fadeIn();
		});    	   	
	})	
    $("#location").click(function () { 
    	$('#location').hide();
    	$('#resetlocation').show();   
		$(".location").fadeOut(function() {
		   $("input.location").val("Boston, Massachusetts, USA");
		   $(".location").fadeIn();
		});		
   });
   $('#resetlocation').click(function(){
    	$('#location').show();
    	$('#resetlocation').hide(); 
   		$(".location").fadeOut(function() {
   			$("input.location").each(function() {
       		$(this).val($(this).data('original'));
   			});
   		$(".location").fadeIn();
		});    	   	
	})		   

});
  
/*
   // revert

*/
