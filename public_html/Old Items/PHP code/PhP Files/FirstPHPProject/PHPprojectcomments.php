<!DOCTYPE>
<html>
<body>
<title>Project PHP</title>
<?php
if (empty($_POST['uname']))
{
$Dir = "projectcomments";
}
else
{
$dir = stripslashes($_POST['uname']);
$Dir = "userprofiles/$dir";
}
if (is_dir($Dir)){
	if (isset($_POST['save'])){
		If (empty($_POST['fname']) or (empty($_POST['lname'])))
			$SaveString = "...\n";
		else{
			$SaveString = "First name: " . stripslashes($_POST['fname']) . "\n";
			$SaveString .= "Last name: " . stripslashes($_POST['lname']) . "\n";
			}
		$SaveString .=date('r') . "\n";
		$SaveString .=stripslashes($_POST['comment']);
		$CurrentTime = microtime();
		$TimeArray = explode(" ", $CurrentTime);
		$TimeStamp = (float)$TimeArray[1] + (float)$TimeArray[0];
		$SaveFileName = "$Dir/Comment.$TimeStamp.txt.";
		$fp = fopen($SaveFileName, "wb");
		if ($fp === FALSE) {
			echo "There was an error creating \"" . htmlentities($SaveFileName) . "\".<br /> \n";
}
		else{
			if (flock($fp, LOCK_EX)) {
				if (fwrite($fp, $SaveString)>0)
					echo "Successfully wrote to file \"" . htmlentities ($SaveFileName) . "\".<br />\n";
				else
					echo "There was an error writing to file \"" . htmlentities($SaveFileName) . "\".<br /> \n";
			flock($fp, LOCK_UN);}

		else { echo "There was an " . "error locking file \"" . htmlentities($SaveFileName) . " for writing\"."."<br />\n";}
		fclose($fp);
		}
	}
}



?>
<h2> Project Comments </h2>
<form action="PHPprojectcomments.php" method="POST">
Your Account Name: <input type="text" name ="uname" /><br />
Your First Name: <input type="text" name ="fname" /><br />
Your Last Name: <input type="text" name = "lname" /><br />
<textarea name="comment" rows="6" cols="50"></textarea><br />
<input type="submit" name="save" value="Submit your comment" /><br />
</form>
