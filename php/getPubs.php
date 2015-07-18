<?PHP
date_default_timezone_set('America/New_York');
include 'conn.php';

$mysqli = new mysqli($DBServer,$DBUser,$DBPass,$DBName);
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}		
$sql = $mysqli -> prepare('SELECT id, name, address, phoneNumber, fileName, website, description FROM pubListing');

$sql -> execute();
$results = mysqli_fetch_all ($sql);

echo(json_encode($results));

?>