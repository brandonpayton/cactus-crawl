<?PHP
date_default_timezone_set('America/New_York');
include 'conn.php';

$email = isset($_POST['email']) ? $_POST['email'] : false;
$mysqli = new mysqli($DBServer,$DBUser,$DBPass,$DBName);
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}		
$sql = 
?>