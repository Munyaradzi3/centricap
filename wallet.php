<?php
	//get wallet details
	include 'dbconn.php';
	$ky=$_GET['key'];
	$sql="SELECT * FROM wallets WHERE userkey='$ky'";
	$data=$conn->query($sql);
	if($data->num_rows==1){
		while($row=$data->fetch_assoc()){
			$su=$row['surname'];
			$ba=$row['balance'];
			$to=$row['total'];
			$in=$row['invested'];
			$fr=$row['free'];
			
			$details=array($su,$ba,$to,$in,$fr);
		}
		
		echo json_encode($details);
	}
	else{
		echo json_encode(array('error'));
	}
?>
