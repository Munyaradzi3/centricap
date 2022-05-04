
<?php
include 'dbconn.php';
function projects($conn){
	//function to pick all projects	
	$sql="SELECT * FROM projects WHERE target>available AND type='poutry'";
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
		//sort in ascending
		$column=array_column($info,'target');
		array_multisort($column,SORT_DESC,$info);		
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
