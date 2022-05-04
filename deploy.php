<?php
	include 'dbconn.php';
	
	function get_balance_wallet($conn,$ky){
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
	
	function deploy($conn,$ky,$am,$id){
		//insert into portfolios
		$sql="INSERT INTO portfolios (userkey,project_id,amount) VALUES('$ky','$id',$am)";
		if($conn->query($sql)==true){
			//update balance
			$init=get_balance_wallet($conn,$ky);
			$fr=$init[1]-$am;
			$in=$init[3]+$am;
			$sql="UPDATE wallets SET free=$fr,invested=$in WHERE userkey='$ky'";
				if($conn->query($sql)==true){
					$d="done";
				}
				else{
					//internal error
					$d="internl error";
				}
		}
		else{
			//internal error
			$d="internal error";
		}
		
	}
	function deploy_positions($conn,$id){
		//deploying project into positions for holders and deleting from pledges.
		$sql="SELECT * FROM pledges WHERE project_id='$id'";
		$data=$conn->query($sql);
		if($data->num_rows>0){
			while($rows=$data->fetch_assoc()){
				$am=$rows['amount'];
				$ky=$rows['userkey'];
				deploy($conn,$ky,$am,$id);
			}
			//deleting from pledges and projects
			$sql="DELETE FROM pledges WHERE project_id='$id'";
			$data=$conn->query($sql);
		}
	}
	function get_project_available($conn,$id){
		//get the balance in a certain wallet
		$sql="SELECT * FROM projects WHERE project_id='$id'";
		$data=$conn->query($sql);
		if($data->num_rows>0){
			while($rows=$data->fetch_assoc()){
				$bl=$rows['available'];
			}
			return $bl;
		}
		else{
			return "error";
		}
	}
	function get_project_target($conn,$id){
		//get the balance in a certain wallet
		$sql="SELECT * FROM projects WHERE project_id='$id'";
		$data=$conn->query($sql);
		if($data->num_rows>0){
			while($rows=$data->fetch_assoc()){
				$bl=$rows['target'];
			}
			return $bl;
		}
		else{
			return "error";
		}
	}
	function update_proj($conn,$am,$id){
		$total=get_project_available($conn,$id);
		if($total!="error"){
			$am=$total+$am;
			$sql="UPDATE projects SET available=$am WHERE project_id='$id'";
			if($conn->query($sql)==true){
				return "done";
			}
			else{
				return "internal-error";
			}
		}
		else{
			return "error";
		}
	}
	
?>
