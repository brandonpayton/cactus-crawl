<?PHP
date_default_timezone_set('America/New_York');
include 'conn.php';

$mysqli = mysqli_connect($DBServer,$DBUser,$DBPass,$DBName);
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}		
$sql = 'SELECT id, name, address, phoneNumber, fileName, website, description FROM pubListing';
$output = array();
$result = $mysqli->query($sql);
while ($row = $result->fetch_assoc()) {
  $output[] = $row;
}

echo(json_encode($output));

?>