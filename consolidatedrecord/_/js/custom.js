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
			    $('.actions-dropdown').toggleClass('hidden');
			});
		
			$('.actions-dropdown').mouseleave(function() {
			    $('.actions-dropdown').toggleClass('hidden');
			});
	
	
	// collapse sidebar.
		$(".sidebartab").click(function() {
		  	var $left = $("div.sidebar");
		    $left.animate({
		      left: parseInt($left.css("left"),10) == 0 ?
		        -$left.outerWidth() :
		        0
		    }),
		        $(".sidebartab").toggleClass("active"); return false;      
		});
	
	
	 // fade in content.
	 $(document).ready(function() {
	 		$( '.sidebar ul' ).fadeIn("fast");
	 		$( '.middle' ).fadeIn("fast");
			$( '.content' ).fadeIn("fast");
	  });

	//IMAGE VIEWER
	
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
	
	// collapse sidebar.
	$(".sidebartab").click(function() {
	  	var $left = $("div.sidebar");
	    $left.animate({
	      left: parseInt($left.css("left"),10) == 0 ?
	        -$left.outerWidth() :
	        0
	    }, 200),
	        $(".sidebartab").toggleClass("active"); return false;      
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
		var containerId = '#tabs-container';
		var tabsId = '.tabs';
		
		$(document).ready(function(){
			// Preload tab on page load
			if($(tabsId + ' LI.current A').length > 0){
				loadTab($(tabsId + ' LI.current A'));
			}
		    $(tabsId + ' A').click(function(){
		    	if($(this).parent().hasClass('current')){ return false; }
		    	if($(this).parent().hasClass('ignore')){ image.php; }
		    	
		    	$(tabsId + ' LI.current').removeClass('current');
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
//DRAGGABLE IMAGE
	$('#draggable').draggable();			
	// notes here
});