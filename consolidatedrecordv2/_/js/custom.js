jQuery(document).ready(function() {
	//SNIFF BROWSER
	if ($.browser.msie) {
	    alert("This prototype works best with Chrome or Safari! You will see bugs if you continue.");
	 }		
	//RECORD PAGE	 
		// Toggle notes active class
			$('.notes').click(function(){
			    $('.notes').toggleClass('active');
			    $('.slidercontent').toggleClass('notes');
			});		
		// Toggle treecard active class
			$('.treecard').click(function(){
			    $('.treecard').toggleClass('active');
			    $('.slidercontent').toggleClass('treecard');
			});	
		// Toggle sidebar slider content
		// show notes
			$('.notes').click(function(){
			    $('.treecard').removeClass('active');
			    $('.slidercontent').removeClass('treecard');
			});	 
		// Show row
			$('.treecard').click(function(){
			    $('.notes').removeClass('active');
				$('.slidercontent').removeClass('notes');
			});	
		// Actions Dropdown
		// Toggle notes active class
			$('.actions').click(function(){
			    $('.actions-dropdown').show();
			},
			$('.actions-dropdown').click(function(){
				$('.actions-dropdown').hide();
			})
			);		
			$('.actions-dropdown').mouseleave(function() {
			    $('.actions-dropdown').hide();
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
	 $(document).ready(function() {
	 		$( '.sidebar ul' ).fadeIn("fast");
	 		$( '.middle' ).fadeIn("fast");
			$( '.content' ).fadeIn("fast");
	  });
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
	// Toggle sidebar context
	// ---Show page
	$('.page').click(function(){
	    $('.page').addClass('active');
	    $('.row').removeClass('active');
		$('.content').addClass('page');
		$('.content').removeClass('row');
	});
	 
	// ---Show row
	$('.row').click(function(){
		$('.row').addClass('active');
		$('.page').removeClass('active');
		$('.content').addClass('row');
		$('.content').removeClass('page');
	});
	
	// slide out middle section.
	$(".middle").ready(function() {
	  	var $left = $(".middle");
	    $left.animate({
	      left: parseInt($left.css("left"),10) == 0 ?
	        -$left.outerWidth() :
	        280
	    }, 200),
	        $(".middle").toggleClass("active"); return false;      
	});
	
		// IMAGE HOVER
	
	$('.imglink').hover(function() {
		$(".dimmer").animate({
		  opacity: 0.9,
		  backgroundPosition: '2px 0px',
		}, 100 );
	});
	$('.imglink').mouseleave(function() {
		$(".dimmer").animate({
		  opacity: 0.7,
		  backgroundPosition: '0px 0px',
		}, 100 );
	});
	
	
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
		// Toggle micro active class
/*$('a.popuplink').attr('id') 
$(this).attr('id')
$('a.popuplink').bind('click', function(){}		*/
$('.microbutton').live('click',function(){
	    if($(this).hasClass('active')){
	      $(this.removeClass('active'));
	    }
	    else{
	      $(this).toggleClass('active');	
	      $('.close').live('click', function(){
	    	$('.microbutton').removeClass('active');
	      });
	   }   			    		    
	});  	
	
//index swap
$('#indexinfo').live('click', function(){
	$('#indexdetail').show();
	$('#allpeople').show()
	$('#indexoverview').hide();
	$('#indexinfo').hide();
});
$('#allpeople').live('click', function(){
	$('#indexdetail').hide();
	$('#allpeople').hide()
	$('#indexoverview').show();
	$('#indexinfo').show();	
});
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

});