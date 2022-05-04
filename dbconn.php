<?php
	//this is the database connection manager
	//simplfys connection to databse
	
	$servername="localhost";
	$username="root";
	$dbpassword="";
	$dbname="mershapp";
	
	$conn=new mysqli($servername, $username, $dbpassword, $dbname);
	
	if($conn->connect_error){
		die("failed:".$conn->connect_error);
	}
	//return array conn is he connecion to database.
?>
