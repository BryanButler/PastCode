<html>
<head></head>
<body>
<?php

function displayRequired($fieldName)
{
echo "The field \"&fieldName\" is required. <br /n>";
}

function validateInput($data, $fieldName)
{
global $errorCount;
if (empty($data)) {
displayRequired($fieldName);
++$errorCount;
$retval = "";
} else 
{ //Only clean up the input if it isn't empty
$retval = trim($data);
$retval = stripslashes($retval);


}
return($retval);
}

function redisplayForm($firstName, $lastName)
{
?>
<h2 style = "text-align:center">Scholorship Form</h2>
<form name = "scholarship" action="process_Scholarship.php" method="post">
<p> First Name: <input type="text name = "fName" value="<?php echo $firstName; ?>" /></p>
<p>Last Name; <input type="text" name="lName" value="<?php echo $lastName; ?>" /></p>
<p><input type ="submit" name = "Submit" value = "Send Form: />
</form>
<?php
}

function validateYear($data, $fieldName)
{
global $errorCount;
if (empty($data)){
	echo "<p>The field $fieldName is required.</p>\n";
	++$errorCount;
	$retval = "";
} //end first validateYear if statement
else 
{
$data = trim($data);
$data = stripslashes($data);
if (is_numberic($data)) {
$data = round($data);
if (($data >= 1900) && ($data <= 2100)) {$retval = $data;}//ends second validateyear if statement
else { echo "<p>The field $fieldName must be between 1900 and 2100.</p>\n"; ++$errorCount; $retval = ""; 

}//end else statement
}//ends inner if statement

else { echo "<p>The field $fieldName must be between 1900 and 2100.</p>\n"; ++$errorCount; $retval = "";}
}
return(retval); 


}//closing function



$firstName = validateInput($_POST['fName'],"First name");
$lastName = validateInput($_POST['lName'],"Last name");

if ($errorCount>0){
	echo "Please use the \"Back\" button to re-enter the data below. <br />\n";
redisplayForm($firstName, $lastName);
}
else
$To = "bbutler41@southhills.edu";
$Subject = "Scholarship Form Results";
$Message = "Student Name: " . $firstName. " " . $lastName;
$result = mail($To, $Subject, $Message);
if ($result)
	$resultMsg = "Your message was successfully sent.";
else
	$resultMsg = "There was a problem sending your message.";

echo $result;




?>


</body>
</html>
