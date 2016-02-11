<!DOCTYPE>
<html>
<body>
<title>PHP Project Login</title>
<?php
if (isset($_POST['login']))
{/*This is the beginning of the login function for the login page*/
	$Dir = stripslashes($_POST['fuser']);
	$DirectoryContents = scandir("userprofiles/$Dir");
	if (file_exists("userprofiles/$Dir") === TRUE) 
	{ /*This is the beginning of the check for the login desination*/
		foreach ($DirectoryContents as $value)
			{
			if (($value != '.') && ($value != '..')){
			echo "<strong>$value</strong><br />";
			echo "<pre>\n";
			$Comment = file("userprofiles/" . $Dir. "/" . $value);
			$fp = fopen("userprofiles/$Dir/$value", "rb");
			if ($fp === FALSE)
{
			echo "There was an error reading file \"" . $value . "\".<br />\n";
}
			else
			{
			
			$FirstName = fgets($fp);
			echo "From : " . htmlentities($FirstName) . "<br />\n";
			$LastName = fgets($fp);
			echo "From : " . htmlentities($LastName) . "<br />\n";
			echo "Comment:<br />\n";
			$Comment = "";
			while (!feof($fp)) {
			$Comment .= fgets($fp);
			}
			echo htmlentities($Comment) . "<br /><hr>";
			}
			}
			}
	} /*this is the end of the check for the login destination*/		
	else
	{
		echo "There is no login matching that username. Please register before attempting to post comments";
	}

} /*end of the scan for existing directory*/	
/*This is the end of the else statement that displays an error message if there is no exisiting account.*/


/*We will now begin the resister button code*/
if (isset($_POST['regis'])) {
	$Dir = stripslashes($_POST['fuser']);
//echo $Dir;
        $makedirectory = mkdir ("userprofiles/$Dir",0777);
	if ($makedirectory === FALSE) {
		echo "There was an error in creating your account";	
}
	else{
		echo "Welcome to the directory";
}

}/*This is the end of the registration checking*/ 


?>

<h2> Project Login </h2>
<form action="loginpage.php" method="POST">
Enter your UserName: <input type = "text" name ="fuser" /><br />
<input type="submit" name="login" value="login" />
<input type="submit" name="regis" value="register" />
</form>
<form method="LINK" ACTION="PHPprojectcomments.php">
<input type="submit" Value = "Post Comment">
</form>
