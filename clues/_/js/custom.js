jQuery(document).ready(function() {
	//SNIFF BROWSER
	if ($.browser.msie) {
	    alert("This prototype works best with Chrome or Safari! You will see bugs if you continue.");
	 }	
	$( "#dialog-modal" ).dialog({	
			height: 363,
			width: 572,
			modal: true,
			resizable: false,
			closeOnEscape: true,
		});	 
		$('.dialogclose, .cancel').click(function(){
			$('#dialog-modal').dialog('close');
		});	
		$('.getstarted').click(function(){
			$('#dialog-modal').dialog('close');
			$('#Step1').show();
		});
	
// collapse sidebar.
	$(".togglehandle").click(function() {
	  	var $left = $("div.sidebar");
	  	var $paginationtools = $('#imagepagination ul');
	    $left.animate({marginLeft: parseInt($left.css("marginLeft"),10) == 0 ? -$left.outerWidth() : 0 });		 
		$paginationtools.animate({marginLeft: parseInt($paginationtools.css("marginLeft"),10) == 0 ? -$paginationtools.outerWidth() : 0 });		    	       
        $(".togglehandle").toggleClass("collapse"); 
        $(".open").toggleClass("close");  
	});	
	$('.leftnavtoggle').click(function(){
		  	var $left = $("div.sidebar");
	  		var $paginationtools = $('#imagepagination ul');		  			  	
		  	if(parseInt($left.css("marginLeft"),10) < 0){ // if panel is closed, open it
		    	$left.animate({marginLeft: 0 });		    
				$paginationtools.animate({marginLeft: 0 });		    		    	
	        	$(".togglehandle").toggleClass("collapse"); 
	        	$(".open").toggleClass("close");          	
	        }
		    else if($(this).hasClass('lastclicked')) { // if it's open, and this button was the last one clicked, close it
	  		    $left.animate({marginLeft: -$left.outerWidth() });
	  		    $paginationtools.animate({marginLeft: -$paginationtools.outerWidth() });	    
	        	$(".togglehandle").toggleClass("collapse"); 
	        	$(".open").toggleClass("close");  
		    }		    
		    // every click of a button needs to set the lastclicked class to track it
		    $('.lastclicked').removeClass('lastclicked');
		    $(this).addClass('lastclicked');
	});			
// tool container & tools
$('.imageviewer, .imagecontrols, #imagepagination').hover(function(){	
	if($('.imagecontrols') == $('.imagecontrols').fadeIn() || $('#imagepagination') == $('#imagepagination').fadeIn()){
			$('.imagecontrols').stop(true);
			$('#imagepagination').stop(true);
		}	
	else{	
			$('.imagecontrols').stop(true).fadeIn(800, function(){
				$(this).hover(function(){
				$(this).fadeTo('fast', 1);
				},$(this).fadeTo('fast', .7));
			});
			$('#imagepagination').stop(true).fadeIn(800, function(){
				$(this).hover(function(){
				$(this).fadeTo('fast', 1);
				},$(this).fadeTo('fast', .7))
			});
		}
	},	
	$('.imageviewer, .imagecontrols, #imagepagination').hover(function(){
		$('.imagecontrols').stop(true).fadeOut(300);
		$('#imagepagination').stop(true).fadeOut(300);
	})
);	
	 // fade in content.
	  $('#backarrow').click(function(){
	  	$('.firstimage').fadeIn();
	  	$('.secondimage').fadeOut();
	  	$("#imagepage").val("1 of 2");	  	
	  });
	  $('#forwardarrow').click(function(){
	  	$('.secondimage').fadeIn();
	  	$('.firstimage').fadeOut();
	  	$("#imagepage").val("2 of 2");
	  });	  
	//IMAGE VIEWER
	//toggle tool tips for left nav
	$('#index').hover(function(){
		$('.index').fadeIn(300);
	}, $('#index').hover(function(){
		$('.index').fadeOut(150);
	}));
		$('#about').hover(function(){
		$('.about').fadeIn(300);
	}, $('#about').hover(function(){
		$('.about').fadeOut(150);
	}));
		$('#comments').hover(function(){
		$('.comments').fadeIn(300);
	}, $('#comments').hover(function(){
		$('.comments').fadeOut(150);
	}));
		$('#recent').hover(function(){
		$('.recent').fadeIn(300);
	}, $('#recent').hover(function(){
		$('.recent').fadeOut(150);
	}));
		$('#findmore').hover(function(){
		$('.moreinfo').fadeIn(300);
	}, $('#findmore').hover(function(){
		$('.moreinfo').fadeOut(150);
	}));	
	
		// IMAGE HOVER
	
	
	// TAB CONTENT
		var containerId = '.content';
		var tabsId = '#leftnav';
		
		$(document).ready(function(){
			// Preload tab on page load
			if($(tabsId + ' li.current a').length > 0){
				loadTab($(tabsId + ' li.current a'));
			}
		    $(tabsId + ' a').click(function(){
		    	if($(this).parent().hasClass('current')){ return false; }
		    	if($(this).parent().hasClass('ignore')){ index.php; }
		    	
		    	$(tabsId + ' li.current').removeClass('current');
		    	$(this).parent().addClass('current');
		    	
		    	loadTab($(this));    	
		        return false;
		    });
		});		
		function loadTab(tabObj){
		    if(!tabObj || !tabObj.length){ return; }
		    $(containerId).addClass('loading');
		    $(containerId).fadeOut('fast');
		    
		    $(containerId).load(tabObj.attr('href'), function(){
		        $(containerId).removeClass('loading');
		        $(containerId).fadeIn('fast');
		    });
		}			

//DRAGGABLE IMAGE	
	// notes here
	$( ".draggable" ).draggable({
   		drag: function() {
 		$('.imagecontrols, #imagepagination').fadeOut(100);
   	},
   	stop: function(){
   		$('.imagecontrols, #imagepagination').fadeIn(100);
   	},
   	start: function(){
   		$('.imagecontrols, #imagepagination').fadeOut(100);
   	}    	  	
});	
	$(function() {
// General code -----------------------------------		
		//Applies draggable behavior to every element on the page with class of "popupDiv"
		$( ".popupDiv" ).draggable(
		//Sub-function which enables Ancestry buttons (class="ancBtn") by removing their disabled class
		{
		  stop: function() {
			  $( ".primary" ).removeClass("disabled");
			  }
		} //End of sub function
		);
		
		//Applies resizable behavior to every element on the page with class of "highlightDiv"
		$('.highlightDiv').resizable();
 
// Code for Step1 pop-up ---------------------------
		//Function for what to do when orange "Done highlighting" button is clicked
		$("#doneStep1Highlighting").click(function () {  
      		$("#Step1Highlighting").hide();  
			$("#Step1Transcribe").show(); 
			$("#Step1Field").focus(); //Puts the focus on the text field so the user can just start typing
    	}); 
		
		//Function for what to do when orange "Save, go to next"" button is clicked
		$("#doneStep1Saving").click(function () {  
			$("#Step1Transcribe").css("visibility","hidden"); 
			var str = $("#Step1Field").val(); 
    		$("#Step1Text").text(str);
			$( ".ancBtn" ).addClass("disabled"); 
			// Show next step
			$("#Step2").show(); 
    	});
		
		//Function for skip link 
		$("#skipStep1").click(function () {  
      		$("#Step1").hide();  
			// Show next step
			$("#Step2").show(); 
    	}); 
 
// Code for Step2 pop-up ---------------------------
		$("#doneStep2Highlighting").click(function () {  
      		$("#Step2Highlighting").hide();  
			$("#Step2Transcribe").show(); 
			$("#Step2Field").focus(); 
    	}); 
		$("#doneStep2Saving").click(function () {  
			$("#Step2Transcribe").css("visibility","hidden"); 
			var str = $("#Step2Field").val(); 
    		$("#Step2Text").text(str);
			$( ".ancBtn" ).addClass("disabled"); 
			// Show next step
			$("#Step3").show(); 
    	});
		$("#skipStep2").click(function () {  
      		$("#Step2").hide(); 
			//Show next step 
			$("#Step3").show(); 
    	});  
 
 
		
	});

});