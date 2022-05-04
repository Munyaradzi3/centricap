<?php
include 'dbconn.php';
function projects($conn){
	//function to pick all projects	
	$sql="SELECT * FROM projects WHERE target>available";
	$data=$conn->query($sql);
	
	if($data->num_rows>0){
		$info=[$data->num_rows];
		$x=0;
		//account found
		while($row=$data->fetch_assoc()){
			$project_id=$row["project_id"];
			$name=$row["name"];
			$desc=$row["descr"];
			$return=$row["exp_return"];
			$time=$row["time"];
			$target=$row["target"];
			$avai=$row["available"];
			$target=round(($avai/$target)*100);
			
			$info[$x]=array("id"=>$x,"project_id"=>$project_id,"name"=>$name,"descr"=>$desc,"return"=>$return,"time"=>$time,"target"=>$target,"avail"=>$avai);
			$x=$x+1;		
		}		
		return $info;	
	}	
	else{	
		return "none";	
	}
}

function project($conn,$project_id){
	//select one specific project	
	$sql="SELECT * FROM projects WHERE project_id='$project_id'";
	$data=$conn->query($sql);
	
	if($data->num_rows>0){
		while($row=$data->fetch_assoc()){
			$project_id=$row["project_id"];
			$name=$row["name"];
			$desc=$row["descr"];
			$return=$row["exp_return"];
			$time=$row["time"];
			$target=$row["target"];
			$avai=$row["available"];
			$target=round(($avai/$target)*100);
			
			$info=array($project_id,$name,$desc,$return,$time,$target,$avai);
		}
		return $info;	
	}	
	else{
		return "none";
	}
}

if($_GET['project_id']=="all"){
	$data=projects($conn);
	$data=json_encode($data);
	echo $data;
}
else{
	$data=project($conn,$_GET['project_id']);
	$data=json_encode($data);
	echo $data;
}
?>











