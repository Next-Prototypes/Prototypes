<?
$debug = false;
function events($event, $location, $date, $range, $yexact, $lexact){
	if($event == '-----' || $event == 'Choose...'){ // weed out blank event
		return false;
	} 
	switch ($event){
		case 'Any event':
			if ($location != "") {
				$qLoc = '82004000'; // location
			}
			if ($date != "") {
			$qDate = '81004000'; // date
			}
			break;
		case 'Birth':
			$qLoc = 'msbpn__ftp'; // location
			$qDate = '81004010'; // date
			break;
		case 'Marriage':
			$qLoc = '_82004020__ftp'; // location
			$qDate = '81004020'; // date
			break;
		case 'Death':
			$qLoc = 'msdpn__ftp'; // location
			$qDate = '81004030'; // date
			break;
		case 'Arrival':
			$qLoc = '_82004200__ftp'; // location
			$qDate = '81004200'; // date
			break;
			case 'Departure':
			$qLoc = '_82004210__ftp'; // location
			$qDate = '82004210'; // date
			break;
		case 'Military service':
			$qLoc = '_81004240__ftp'; // location
			$qDate = '81004240'; // date
			break;
	}
	if($lexact != '0'){
		$qLexact = '&'.$qLoc.'_x='.$lexact; // exact location
	} else {
		$qLexact = '';
	}
	if($range != '%20--' && $range != ' --' && $range != null){ // add +/- range
		$qRange = '&rs_'.$qDate.'__date='.$range;
		$qDate = $qDate.'__date';
	}else{
		$qDate = 'rg_'.$qDate.'__date';
	}
	if($yexact == 'true'){
		$qYexact = '&'.$qDate.'_x=XO'; // exact year
	} else {
		$qYexact = '';
	}
	return '&'.$qLoc.'='.str_replace(' ', '+',$location).'&'.$qDate.'='.str_replace(' ', '+',$date).$qRange.$qYexact.$qLexact;
}
function catBuckets($hr, $ft, $st, $pm){
	$qCatBuckets = "";
	if ($hr == 'true') {
		$qCatBuckets .= 'r';
	}
	if ($ft == 'true') {
		$qCatBuckets .= 't';
	}
	if ($st == 'true') {
		$qCatBuckets .= 's';
	}
	if ($pm == 'true') {
		$qCatBuckets .= 'p';
	}
	return '&catBucket='.$qCatBuckets;
}

function family($role, $rfn, $rln, $rfn_x, $rln_x){
	if (empty($rfn) || ($rfn == ' ') || ($rolek == '-- select --')){ // weed out blank person
		return false;
	} else {
		switch($role){	
		case 'Mother':
			$qfn = '80008002';
			$qln = '80008003';
			break;
		case 'Father':
			$qfn = '8000C002';
			$qln = '8000C003';
			break;
		case 'Spouse':
			$qfn = '80018002';
			$qln = '80018003';
			break;
		case 'Child':
			$qfn = '80014002';
			$qln = '80014003';
			break;
		case 'Sibling':
			$qfn = '80010002';
			$qln = '80010003';
			break;
		}
		if($rfn_x == 'true'){ // exact first name
			$xfn = '&_'.$qfn.'_x=XO';
		}
		if($rln_x == 'true'){ // exact last name
			$xln = '&_'.$qln.'_x=XO';
		}
		if(empty($rln) || $rln == ' '){ // empty last name, give search term's last name
			$rln = $_GET['ln'];
		}
	return '&_'.$qfn.'='.str_replace(' ', '+',$rfn).$xfn.'&_'.$qln.'='.str_replace(' ', '+',$rln).$xln;
	}
}
function firstNameFilters($field, $phonetic, $similar, $initials){
	$fn_x = '&'.$field.'_x=';
	if ($phonetic == ', phonetic' || $_GET['fnp'] == ',%20phonetic'){ // phonetic
		if($fn_x != '&'.$field.'_x='){
			$fn_x .= '_';
		}
		$fn_x .= 'NP';
	}
	if ($similar == ', similar' || $_GET['fnsm'] == ',%20similar'){ // similar
		if($fn_x != '&'.$field.'_x='){
			$fn_x .= '_';
		}
		$fn_x .= 'NN';
	}
	if ($initials == ', initials' || $_GET['fni'] == ',%20initials'){ // Initials
		if($fn_x != '&'.$field.'_x='){
			$fn_x .= '_';
		}
		$fn_x .= 'NIC';
	}
	if ($fn_x == '&'.$field.'_x='){ // exact only
		$fn_x .= 'XO';
	}
	return $fn_x;
}
function lastNameFilters($field, $phonetic, $similar, $soundex){
	$ln_x = '&'.$field.'_x=';
	if ($phonetic == ', phonetic' || $_GET['lnp'] == ',%20phonetic'){ // phonetic
		if($ln_x != '&'.$field.'_x='){
			$ln_x .= '_';
		}
		$ln_x .= 'NP';
	}
	if ($soundex == ', Soundex' || $_GET['lni'] == ',%20Soundex'){ // Soundex
		if($ln_x != '&'.$field.'_x='){
			$ln_x .= '_';
		}
		$ln_x .= 'NS';
	}
	if ($similar == ', similar' || $_GET['lnsm'] == ',%20similar'){ // similar
		if($ln_x != '&'.$field.'_x='){
			$ln_x .= '_';
		}
		$ln_x .= 'NN';
	}
	if ($ln_x == '&'.$field.'_x='){ // exact only
		$ln_x .= 'XO';
	}
	return $ln_x;
}

$preQuery = 'http://search.ancestry.com/cgi-bin/sse.dll?gl=ROOT_CATEGORY&rank=1&new=1&so=3&MSAV=t&msT=1&gss=proto';

if(isset($_GET[fn]) && $debug != true){
	foreach($_GET as $key => $value){
		if($value != ''){
			switch ($key){
				case 'fn': // first name
					$query .= '&gsfn='.str_replace(' ', '+',$value);
					break;
				case 'fnx': // first name filters
					if($value != 'false'){
						$query .= firstNameFilters('gsfn', $_GET['fnp'], $_GET['fnsm'], $_GET['fni'], '');
					}
					break;
				case 'ln': // last name
					$query .= '&gsln='.str_replace(' ', '+',$value);
					break;
				case 'lnx': // last name filters
					if($value != 'false'){
						$query .= lastNameFilters('gsln', $_GET['lnp'], $_GET['lnsm'], $_GET['lnsd']);
					}
					break;
				case 'r1': // location 1 place
					$query .= '&msrpn__ftp='.str_replace(' ', '+',$value);
					if($_GET['r1x'] != ''){
						$query .= '&msrpn__ftp_x='.($_GET['r1x']);
					}
					break;
					// Changed all exact settings below to be set off of the first location exact setting
				case 'r2': // location 2 place
					$query .= '&msrpn1__ftp='.str_replace(' ', '+',$value);
					if($_GET['r1x'] != ''){
						$query .= '&msrpn1__ftp_x=XO'.($_GET['r1x']);
					}
					break;
				case 'r3': // location 3 place
					$query .= '&msrpn2__ftp='.str_replace(' ', '+',$value);
					if($_GET['r1x'] != ''){
						$query .= '&msrpn2__ftp_x='.($_GET['r1x']);
					}
					break;
				case 'r4': // location 4 place
					$query .= '&msrpn3__ftp='.str_replace(' ', '+',$value);
					if($_GET['r1x'] != ''){
						$query .= '&msrpn3__ftp_x='.($_GET['r1x']);
					}
					break;
				case 'yr': // "lived in" year
					if($_GET['e1'] != 'Birth' && $_GET['e2'] != 'Birth' && $_GET['e3'] != 'Birth' && $_GET['e4'] != 'Birth'){ // super lame way to check if there's a birth event
						$query .= '&_81004010='.str_replace(' ', '+',$value);
					}
					break;
				case 'e1': // event 1
					if($_GET['e2'] != 'Birth' && $_GET['e3'] != 'Birth' && $_GET['e4'] != 'Birth'){ // super lame way to check if there's a birth event
						$query .= events($_GET['e1'],$_GET['e1l'], $_GET['e1y'], $_GET['e1r'], $_GET['e1yx'], $_GET['e1lx']);
					}
					break;
				case 'e2': // event 2
					$query .= events($_GET['e2'],$_GET['e2l'], $_GET['e2y'], $_GET['e2r'], $_GET['e2yx'], $_GET['e2lx']);
					break;
				case 'e3': // event 3
					$query .= events($_GET['e3'],$_GET['e3l'], $_GET['e3y'], $_GET['e3r'], $_GET['e3yx'], $_GET['e3lx']);
					break;
				case 'e4': // event 4
					$query .= events($_GET['e4'],$_GET['e4l'], $_GET['e4y'], $_GET['e4r'], $_GET['e4yx'], $_GET['e4lx']);
					break;
				case 'f1': // family 1
					$query .= family($_GET['f1'],$_GET['f1f'],$_GET['f1l'],$_GET['f1fx'],$_GET['f1lx']);
					break;
				case 'f2': // family 2
					$query .= family($_GET['f2'],$_GET['f2f'],$_GET['f2l'],$_GET['f2fx'],$_GET['f2lx']);
					break;
				case 'f3': // family 3
					$query .= family($_GET['f3'],$_GET['f3f'],$_GET['f3l'],$_GET['f3fx'],$_GET['f3lx']);
					break;
				case 'f4': // family 4
					$query .= family($_GET['f4'],$_GET['f4f'],$_GET['f4l'],$_GET['f4fx'],$_GET['f4lx']);
					break;
				case 'ihr': // historical records
					$hrCatBucket = $_GET['ihr'];
					break;
				case 'ift': // family trees 
					$ftCatBucket = $_GET['ift'];
					break;
				case 'isp': // stories and pubs
					$spCatBucket = $_GET['isp'];
					break;
				case 'ipm': // photos and maps records
					$pmCatBucket = $_GET['ipm'];
					break;
				case 'pri': // record collection priority
					$query .= '&cp=';
					switch ($value){
						case 'All Collections':
							$query .= '0';
							break;
						case 'United States':
							$query .= '12';
							break;
						case 'African American':
							$query .= '100';
							break;
						case 'Australian and UK':
							$query .= '2';
							break;
						case 'Canadian':
							$query .= '3';
							break;
						case 'English':
							$query .= '4';
							break;
						case 'French':
							$query .= '5';
							break;
						case 'German':
							$query .= '6';
							break;
						case 'Italian':
							$query .= '7';
							break;
						case 'Irish':
							$query .= '8';
							break;
						case 'Jewish':
							$query .= '101';
							break;
						case 'Native American':
							$query .= '102';
							break;
						case 'Scottish':
							$query .= '9';
							break;
						case 'Swedish':
							$query .= '10';
							break;
						case 'United Kingdom and Irish':
							$query .= '11';
							break;	
					}
					if($_GET['prix'] == 1 || $_GET['prix'] == true){ // collection exactness
						 $query .= '&cpxt=1'; 
					} else {
						 $query .= '&cpxt=0'; 
					}

				}
		}
	}
	$query .= catBuckets($hrCatBucket,$ftCatBucket,$spCatBucket,$pmCatBucket);
	header('Location:'.$preQuery.$query);
	exit;
}
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Redirect</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<script>
	var url = document.location.href.split('#OnLoadVariable=&', 2);
	if(document.location.href.indexOf('#OnLoadVariable') != -1){
		var newURL = url[0]+'?'+url[1].replace(/%20/g, '+')
		window.location= url[0]+'?'+url[1].replace(/%20/g, '+');
	} else {
		var newURL = document.location.href.replace(/&/g, '<br />');
		document.write(newURL);
	}
	</script>	
</head>
<body>
</body>
</html>
