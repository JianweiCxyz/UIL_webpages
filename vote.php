<?php
$geoid = intval($_POST['geoid']);
$vote = intval($_POST['opinion']);
$why = 0;
if (array_key_exists('why', $_POST))
    $why = intval($_POST['why']);
if ($vote == 0)
    $reason = $_POST['reasonNo'];
else
    $reason = $_POST['reasonYes'];

$con = mysqli_connect('mysql.utweb.utexas.edu','utw10792','password','utw10792');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"Votes");
$date = date_create();
$timestamp = date_timestamp_get($date);
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}
$sql="INSERT INTO Votes VALUES ($geoid, $vote, $why, \"$reason\", now(), \"$ip\");";

if (mysqli_query($con, $sql)) {
    $response = array(
        'Thank you, You are a wonderful citizen.',
        'Thank you, you are doing a great work for your city and community.',
        'Thank you, you are like a NBA All Star to us.',
        'Thank you for your great knowledge about local transit .',
        'Great job, well done.',
        'Thank you, your opinions will help our research greatly.',
        'These are great answers, thank you.',
        'Thank you for your Superbowl MVP level answers.',
        'Thank you, you are our rock star.',
        'Thank you, You are a wonderful human being. ',
    );
    echo $response[array_rand($response, 1)];
}
else {
	echo "Error";
}
mysqli_close($con);
?>
