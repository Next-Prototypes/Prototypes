<?php include("header.php"); ?>
	<div class="toolbar">
		<a href="index.php" class="detailsbutton button">Details</a>
		<h1>1920 United States Federal Census record for John Fitzgerald Kennedy</h1>
		<a href="#" class="actions button">Actions</a>
		<a href="#" class="save button">Save</a>
		<div class="actions-dropdown hidden">
		<h4 class="more"><a href="#">More Options</a></h4>
			<ul>
				<li><a href="#">View/Add alternate info</a></li>
				<li><a href="#">Report image problem</a></li>
				<li><a href="#">View printer friendly</a></li>
				<li><a href="#">View blank census form</a></li>
				<li><a href="#">Find others researching John F Kennedy</a></li>
				<li><a href="#">Compare this record</a></li>
			</ul>
			<ul class="socialmediaicons">
				<li><a href="#" class="facebook">facebook</a></li>
				<li><a href="#" class="twitter">twitter</a></li>				
				<li><a href="#" class="email">email</a></li>
			</ul>
			<h4 class="share"><a href="#">Share</a></h4>	
		
		</div>
	</div>
</div>
<div class="main imageviewerpage">
<div id="leftnav">
	<ul>
		<li class="current"><a href="./tabs/tab-1.html" id="index" class="leftnavtoggle lastclicked">Index</a></li>
		<li><a href="./tabs/tab-2.html" id="about" class="leftnavtoggle">About</a></li>
		<li><a href="./tabs/tab-3.html" id="comments" class="leftnavtoggle">Comments</a></li>
		<li><a href="./tabs/tab-4.html" id="recent" class="leftnavtoggle">Recent Activity</a></li>
		<li><a href="./tabs/tab-5.html" id="findmore" class="leftnavtoggle">Find more like this</a></li>							
	</ul>
</div>

	<div class="sidebar">		
				<div class="content row">
			<!-- <img src="./_/img/index.jpg" /> -->
		</div><!-- end content row -->
			<!-- <div class="image-detail-toggle">
				<a href="#" class="page"></a><a href="#" class="row active"></a>
			</div>-->		
	</div><!-- end side bar -->
	<a class="togglehandle"><span class="open"></span></a>
	<div class="imageviewer">
		<div class="image">
			<img src="_/img/document.png" alt="imageviewer" width="1024" height="739" id="draggable" />
			<div class="imagecontrols"></div>			
		</div>	
		<div id="imagepagination">
			<ul>
				<li><a href="">1</a></li>
				<li><input type="text" value="1 - 3" /></li>
				<li><a href="">2</a></li>												
			</ul>
		</div>				
	</div><!-- end image viewer container-->
			
		<div class="tooltip index">index</div>
		<div class="tooltip about">about</div>
		<div class="tooltip comments">comments</div>
		<div class="tooltip recent">recent</div>
		<div class="tooltip moreinfo">more</div>		
</div><!-- end main -->

<div class="footer">
	<div class="left">
		<h2><a href="#">1920 United States Federal Census</a></h2><span>></span>
		<h2><a href="#">Massachusetts</a></h2><span>></span>
		<h2><a href="#">Norfolk</a></h2><span>></span>
		<h2><a href="#">Brookline</a></h2><span>></span>
		<h2><a href="#">District 165</a></h2><span>></span>
		<h2><a href="#">14</a></h2>
	</div>
	<div class="right">
		<a href="#">Report a problem</a>
		<a href="#">Help</a>
	</div>
</div>
<script src="./_/js/jquery-1.4.4.min.js"></script>
<script src="./_/js/custom.js"></script>
<script src="./_/js/jquery-ui-1.8.9.custom.min.js"></script>
<script src="./_/js/imagepanner.js"></script>
</body>
</html>
