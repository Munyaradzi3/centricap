<?php
	//pledging into a selected project
	include 'dbconn.php';
	include 'deploy.php';
	function get_balance($conn,$ky){
		//get the balance in a certain wallet
		$sql="SELECT * FROM wallets WHERE userkey='$ky'";
		$data=$conn->query($sql);
		if($data->num_rows>0){
			while($rows=$data->fetch_assoc()){
				$bl=$rows['balance'];
				$fr=$rows['free'];
				$to=$rows['total'];
				$in=$rows['invested'];
				
				$init=array($bl,$fr,$to,$in);
			}
			return $init;
		}
		else{
			return "error";
		}
	}
	function check($conn,$pr,$ky){
		//check if an investment already exist
		$sql="SELECT * FROM pledges WHERE project_id='$pr' AND userkey='$ky'";
		$data=$conn->query($sql);
	
		if($data->num_rows>0){
			while($rows=$data->fetch_assoc()){
				$am=$rows['amount'];
			}
			return $am;
		}
		else{
			return 0;
		}
	}
	
	$ky=$_GET['key'];
	$pr=$_GET['project_id'];
	$am=$_GET['amount'];
	
	$init=get_balance($conn,$ky);
	if($am<$init[1]){
		//sufficient balance
		$fr=$init[1]-$am;
		$in=$init[3]+$am;
		$exist=check($conn,$pr,$ky);
		if($exist==0){
			//insert new investment
			$sql="INSERT INTO pledges (userkey,project_id,amount) VALUES('$ky','$pr',$am)";
			if($conn->query($sql)==true){
				$proj=update_proj($conn,$am,$pr);
				if($proj=="done"){
					//see if target reached
					$tg=get_project_target($conn,$pr);
					$av=get_project_available($conn,$pr);
					if($tg!="error" & $av!="error"){
						if($tg<=$av){
							deploy_positions($conn,$pr);
						}
					}
					else{
						//label internal error
						$err="internal error";
					}
					echo json_encode(array('done'));
				}
				else{
					echo json_encode(array('failed-to-update-projects-available'));
				}
			}
			else{
				echo json_encode(array('internal-error'));
			}
		}
		else{
			//there is a prio investment
			$total=$am+$exist;
			$sql="UPDATE pledges SET amount=$total WHERE userkey='$ky' AND project_id='$pr'";
			if($conn->query($sql)==true){
				$proj=update_proj($conn,$am,$pr);
				if($proj=="done"){
				//see if target reached
					$tg=get_project_target($conn,$pr);
					$av=get_project_available($conn,$pr);
					if($tg!="error" & $av!="error"){
						if($tg<=$av){
							deploy_positions($conn,$pr);
						}
					}
					else{
						//label internal error
						$err="internal error";
					}
					echo json_encode(array('done'));
				}
				else{
					echo json_encode(array('failed-to-update-projects-available'));
				}
			}
			else{
				echo json_encode(array('internal-error'));
			}
		}
	}
	else{
		echo json_encode(array('insufficient-balance'));
	}
	
?>
