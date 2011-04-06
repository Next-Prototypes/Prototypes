$(function() {
    $("nav.tabs ul").tabs("div.panes > div");
});
$(document).ready(function() {
    $("#panel-handle").live('click', function() {
        var $right = $("#slider");
        $right.animate({
            right: parseInt($right.css("right"),10) == 0 ?
            -$right.outerWidth() :
            0
        })
        $('#slider2').animate({
            right:-outerWidth
        });
                $('#slider3').animate({
            right:-outerWidth
        });
        $('#editEventForm').animate({
            right:-outerWidth
        });         
    });
}); 
$(document).ready(function() {
    $(".search-toggle-panel").live('click',function() {
        var $right = $("#slider");
        $right.animate({
            right: parseInt($right.css("right"),10) == 0 ?
            -$right.outerWidth() :
            0
        })
        $('#slider2').animate({
            right:-outerWidth
        });       
    });
});

/* panel toggling*/
$(function() {
$('#slider').animate({
        right:-outerWidth
    });
    $('#slider2').animate({
        right:-outerWidth
    });
    $('#slider3').animate({
        right:-outerWidth
    });    
    $('.toggle-node').live('click', function () {
        var $right = $('#slider');        
        var person = $(this).attr('person');
        var personName = personNode(person);
			                
        function personNode(personName){
            switch (personName){
                case 'john':
                    $right.load('/_/includes/rightpanel/person-data.php?person=john', function () {
                        $right.animate({
                            right:"0"
                        }, "normal");
                        $('#slider2').animate({
                            right:-outerWidth
                        });
                    });
                    break;
                case 'joseph':
                    $right.load('/_/includes/rightpanel/person-data.php?person=joseph', function () {
                        $right.animate({
                            right:"0"
                        }, "normal");
                        $('#slider2').animate({
                            right:-outerWidth
                        });
                    });
                    break;
                case 'rose':
                    $right.load('/_/includes/rightpanel/person-data.php?person=rose', function () {
                        $right.animate({
                            right:"0"
                        }, "normal");
                        $('#slider2').animate({
                            right:-outerWidth
                        });
                    });
                    break;
	        		        
            }
            return false;
        };

    });
});
$(document).ready(function(){
    $('#birth').live('click', function(){
        var $right = $('#slider2');
        $right.animate({
            right: parseInt($right.css("right"), 10) == 0 ?
            -$right.outerWidth() :
            0
        });
    
	});
});
$(document).ready(function(){
    $('#marriage').live('click', function(){
        var $right = $('#slider3');
        $right.animate({
            right: parseInt($right.css("right"), 10) == 0 ?
            -$right.outerWidth() :
            0
        });
    });
});
$(document).ready(document).ready(function(){
    $(".pedigree-toggle").live('click',function(){
        $("#pedigreedropdown").toggle("normal");
        $("#pedigreedropdown").hover(function() {
            }, function(){
                $("#pedigreedropdown").hide(); //When the mouse hovers out of the subnav, move it back up
            });
    });
});

$(document).ready(function(){
    $(".actions-toggle").live('click', function(){
        $("#actionsdropdown").toggle("normal");
        $("#actionsdropdown").hover(function() {
            }, function(){
                $("#actionsdropdown").hide(); //When the mouse hovers out of the subnav, move it back up
            });
    });
});
$(document).ready(function(){
    $(".editactions-toggle").live('click', function(){
        $("#editactionsdropdown").toggle("normal");
        $("#editactionsdropdown").hover(function() {
            }, function(){
                $("#editactionsdropdown").hide(); //When the mouse hovers out of the subnav, move it back up
            });
    });
});
$(document).ready(function(){
    $(".editactions-toggle2").live('click', function(){
        $("#editactionsdropdown2").toggle("normal");
        $("#editactionsdropdown2").hover(function() {
            }, function(){
                $("#editactionsdropdown2").hide(); //When the mouse hovers out of the subnav, move it back up
            });
    });
});
$(document).ready(function(){
	$("#editsearchbutton").live('click',function(){
		$("#edit-search-modal").dialog({
		modal: true,
		position: [125, 0]
		
		});
	});
});
$(document).ready(function(){
    /* Adding a colortip to any tag with a title attribute: */
    $("[title]").colorTip({
        color:"yellow"
    });
});

	$(function() {
		$("#draggable").draggable();
	});

$(document).ready(function(){
  $("#left-panel-handle").live('click',function(){
   /* $("#leftpanel").toggle("normal");*/
    
    var $leftpanel = $('#leftpanel');
        $leftpanel.animate({
            marginLeft: parseInt($leftpanel.css("marginLeft"), 10) == 0 ?
            -$leftpanel.outerWidth() :
            0
        });
  });
});
$(function(){
    $('#closeEditData').live('click', function(){
        var $right = $('#slider2');
        $right.animate({
            right: parseInt($right.css("right"), 10) == 0 ?
            -$right.outerWidth() :
            0
        });
    });
});
$(function(){
    $('#closeEditData2').live('click', function(){
        var $right = $('#slider3');
        $right.animate({
            right: parseInt($right.css("right"), 10) == 0 ?
            -$right.outerWidth() :
            0
        });
    });
});

// add and edit vital info panels

$.bDate = function(){	
    var birthDate = $("#birthDate");
    var birthLocation = $("#birthLocation");
    var birthComments = $("#birthComments");
    $("#tab-facts dob").html(
        birthDate.val());
    $("#tab-facts bLocation").html(
        birthLocation.val());
    $("#tab-facts bComments").html(
        birthComments.val());
}; 
$.mDate = function(){	
    var marriageDate = $("#marriageDate");
    var marriageLocation = $("#marriageLocation");
    var spouse = $("#spouse");
    $("#tab-facts mdate").html(
        marriageDate.val());
    $("#tab-facts mLocation").html(
        marriageLocation.val());
    $("#tab-facts spouse").html(
        spouse.val());
}; 		
	
$(document).ready(function(){
    $("#saveButton").attr('savedata', 'birth').live('click', function(){
        $.bDate();
    });
});
$(document).ready(function(){
    $("#saveButton").attr('eventtype', 'marriage').live('click', function(){
        $.mDate();
		$("#editEventForm").animate({right: -outerWidth});		       
    });
  
});
$(document).ready(function() {
    $("#accordionmenu").accordion();
});



	 