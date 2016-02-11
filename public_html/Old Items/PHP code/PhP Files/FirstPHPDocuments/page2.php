<html>
<head></head>
<body>
<?php
$firstName = $_GET['fname'];
$lastName = $_GET['lname'];
$passwd = $_GET['password'];

echo  "Hello ".$firstName." ".$lastName ." Your password is ".$passwd;

echo "<form name = 'SecondForm' action = 'page3.php' method = 'get'>";
echo "<input type = 'text' name = 'fname' value = $firstName><br />";
echo "<input type = 'text' name = 'lname' value = $lastName><br />";
echo "<input type = 'text' name = 'city' value = 'Please enter your city here' ><br />";
echo "<input type = 'text' name = 'state' value = 'Please enter your state here'><br />";
echo "<textara name = 'area'></textarea";
echo "/ br";
echo "Chevy"
echo "<input type = 'radio' name = 'one' value = 'Chevy'>";
echo "<input type = 'checkbox' name = 


echo "<input type = 'submit' name = 'Confirmation' value = 'Click Me'>";










?>
</body>
