<?php

	include 'dbconn.php';
	
	function project($conn,$project_id,$am,$n){
		//select one specific project	
		$sql="SELECT * FROM projects WHERE project_id='$project_id'";
		$data=$conn->query($sql);
	
		if($data->num_rows>0){
			while($row=$data->fetch_assoc()){
				$project_id=$row["project_id"];
				$name=$row["name"];
				$desc=$row["descr"];
			
				$info=array("id"=>$n,"project_id"=>$project_id,"name"=>$name,"descr"=>$desc,"amount"=>$am);
			}
			return $info;	
		}	
		else{
			return "none";
		}
	}

	$ky=$_GET["key"];

	$sql="SELECT * FROM portfolios WHERE userkey='$ky'";
	$data=$conn->query($sql);
	if($data->num_rows>0){
		$info=[$data->num_rows];
		$x=0;
		while($row=$data->fetch_assoc()){
			$id=$row["project_id"];
			$am=$row["amount"];
			$y=project($conn,$id,$am,$x);
			if($y!="none"){
				$info[$x]=$y;
			}
			$x=$x+1;
		}
		
		echo json_encode($info);
	}
	else{
		echo json_encode(array("none"));
	}
	
?>
