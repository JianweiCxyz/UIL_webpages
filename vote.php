<html>

<head></head>

<body>
    <script type="text/javascript">
        function countdown() {
            var i = document.getElementById('counter');
            i.innerHTML = parseInt(i.innerHTML) - 1;
            if (parseInt(i.innerHTML) <= 0)
                window.close();
        }
        setInterval(function () {
            countdown();
        }, 1000);
    </script>
<?php
$geoid = intval($_POST['geoid']);
$vote = intval($_POST['opinion']);
$options = array(0, 0, 0, 0);

if (array_key_exists('why', $_POST)) {
    $why = ($_POST['why']);
    $arrlength = count($why);
    for ($x = 0; $x < $arrlength; $x++) {
        $options[$why[$x] - 1] = 1;
    }
}
if ($vote == 0) {
    $reason = $_POST['reasonNo'];
} else {
    $reason = $_POST['reasonYes'];
}

$con = mysqli_connect('mysql.utweb.utexas.edu','utw10792','password','utw10792');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con, "Votes");
$date = date_create();
$timestamp = date_timestamp_get($date);
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}
$sql = "INSERT INTO Votes VALUES ($geoid, $vote, $options[0], $options[1], $options[2], $options[3], \"$reason\", now(), \"$ip\");";

if (mysqli_query($con, $sql)) {
    $response = array(
        'Thank you, You are a wonderful citizen.',
        'Thank you, you are doing a great work for your city and community.',
        'Thank you, you are like an All-Star to us.',
        'Thank you for your amazing knowledge of local transit.',
        'Great job, well done.',
        'Thank you, your opinions will help our research greatly.',
        'These are great answers, thank you.',
        'Thank you for your MVP answers.',
        'You rock!',
        'Absolutely amazing!',
    );
    echo $response[array_rand($response, 1)];
} else {
    echo "Error:";
}
mysqli_close($con);
echo "<br>";
?>
        <p>This window will close automatically within
            <span id="counter">3</span> second(s).</p>
</body>

</html>