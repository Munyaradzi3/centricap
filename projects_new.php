
<?php
include 'dbconn.php';
function projects($conn){
	//function to pick all projects	
	$sql="SELECT * FROM projects WHERE target>available";
	$data=$conn->query($sql);
	
	if($data->num_rows>0){
		$info=[$data->num_rows];
		$x=0;
		$n=$data->num_rows;
		$n=$n-1;
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
			
			$info[$x]=array("id"=>$n,"project_id"=>$project_id,"name"=>$name,"descr"=>$desc,"return"=>$return,"time"=>$time,"target"=>$target,"avail"=>$avai);
			$x=$x+1;
			$n=$n-1;		
		}
		//sort
		$column=array_column($info,'id');
		array_multisort($column,SORT_ASC,$info);
			
		return $info;	
	}	
	else{	
		return "none";	
	}
}
$data=projects($conn);
$data=json_encode($data);
echo $data;
?>
