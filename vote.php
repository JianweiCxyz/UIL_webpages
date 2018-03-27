<?php
$geoid = intval($_GET['geoid']);
$vote = intval($_GET['vote']);

$con = mysqli_connect('mysql.utweb.utexas.edu','utw10792','password','utw10792');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"utw10792");
$date = date_create();
$timestamp = date_timestamp_get($date);
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}
$sql="INSERT INTO VoteLog VALUES ($geoid, $vote, \"$ip\", now()) ON DUPLICATE KEY UPDATE
	vote='$vote', time=now();";
$result = mysqli_query($con, $sql);

if (mysqli_query($con, $sql)) {
    echo "OK";
}
else {
	echo "Error"
}
mysqli_close($con);
?>
