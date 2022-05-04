<?php
	include 'dbconn.php';
	function check($conn,$em){
		//function to check if an email already exist
		$sql="SELECT * FROM accounts WHERE email='$em'";
		$data=$conn->query($sql);
	
		if($data->num_rows==1){
			return 1;
		}
		else{
			return 0;
		}
	}
	//create connection to database script
	
	$su=$_GET['surname'];
	$fu=$_GET['fullname'];
	$ad=$_GET['address'];
	$em=$_GET['email'];
	$ph=$_GET['phone'];
	$db=$_GET['DoB'];
	$ps=$_GET['password'];
	
	$ky=$em.$ph;
	
	$sql="INSERT INTO accounts (userkey,fullname,surname,phone,address,email,password,dob) VALUES('$ky','$fu','$su','$ph','$ad','$em','$ps','$db')";
	
	//check if account already exist
	$ifexist=check($conn,$em);
	if($ifexist==0){
		//account does not exist
		if($conn->query($sql)==true){
			//create wallet
			$ba=0; $to=0; $in=0; $fr=0;
			$sql="INSERT INTO wallets (userkey,surname,balance,total,invested,free) VALUES('$ky','$su',$ba,$to,$in,$fr)";
			if($conn->query($sql)==true){
				echo json_encode(array('done',$ky));
			}
		}
		else{
			echo json_encode(array('failed','error'));
		}
	}
	else{
		echo json_encode(array('exist','account'));
	}
?>
