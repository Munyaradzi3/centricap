<?php
	//script for logging in
	//login is just a way to check if an account for a user exist.
	
	include 'dbconn.php';
	$em=$_GET['email'];
	$ps=$_GET['password'];
	
	$sql="SELECT * FROM accounts WHERE email='$em' AND password='$ps'";
	$data=$conn->query($sql);
	if($data->num_rows==1){
		while($row=$data->fetch_assoc()){
			$key=$row["userkey"];
		}
		echo json_encode(array('done',$key));
	}
	else{
		echo json_encode(array('not-found'));
	}
?>
