<?php
$geoid = intval($_GET['geoid']);
$vote = intval($_GET['vote'])

$con = mysqli_connect('mysql.utweb.utexas.edu','utw10792','NVM8z61FI9SIXFWa','utw10792');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"utw10792");
$date = date_create();
$timestamp = date_timestamp_get($date)
$sql="INSERT INTO VoteLog VALUES ($geoid, $vote, $_SERVER['REMOTE_ADDR'], $timestamp);";
$result = mysqli_query($con, $sql);

if (mysqli_query($con, $sql)) {
    echo "OK";
}
else {
	echo "Error: " . $sql . "<br>" . $con->error;
}
mysqli_close($con);
?>
