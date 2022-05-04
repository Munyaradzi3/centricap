<?php
	//depositing money into a wallet
	include 'dbconn.php';
	
	function get_balance($conn,$ky){
		//get the balance in a certain wallet
		$sql="SELECT * FROM wallets WHERE userkey='$ky'";
		$data=$conn->query($sql);
		if($data->num_rows>0){
			while($rows=$data->fetch_assoc()){
				$bl=$rows['balance'];
				$fr=$rows['free'];
				$to=$rows['total'];
				
				$init=array($bl,$fr,$to);
			}
			return $init;
		}
		else{
			return "error";
		}
	}
	
	$ky=$_GET['key'];
	$am=$_GET['amount'];
	
	$init=get_balance($conn,$ky);
	if($init!="error"){
		$balance=$init[0]+$am;
		$free=$init[1]+$am;
		$total=$init[2]+$am;
		$sql="UPDATE wallets SET balance=$balance,free=$free,total=$total WHERE userkey='$ky'";
		if($conn->query($sql)==true){
			echo json_encode(array('done'));
		}
		else{
			echo json_encode(array('error'));
		}
	}
	else{
		echo json_encode(array('wallet-error'));
	}
?>
