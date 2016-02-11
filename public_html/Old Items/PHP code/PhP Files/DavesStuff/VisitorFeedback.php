<!DOCTYPE>
<html>
<body>
<title>Visitor Feedback</title>
<?php
$Dir = "comments";
if (is_dir($Dir)) {
	$CommentFiles = scandir($Dir);
	foreach ($CommentFiles as $FileName) {
	if (($FileName != '.') && ($FileName != '..')) {
		echo "From <strong>$FileName</strong><br />";
		echo "<pre>\n";
		$Comment = file($Dir . "/" . $FileName);

		$fp = fopen($Dir . "/" . $FileName, "rb");
		if($fp === FALSE)
			echo "There was an aerror reading file \"" . $FileName . "\".<br />\n";
else
{
echo "From <strong>$FileName</strong><br />";
$From = fgets($fp);
echo "From: " . htmlentities($From) . "<br />\n";
$Email = fgets($fp);
echo "Email Address: " . htmlentities($Email) . "<br />\n";
$Date = fgets($fp);
echo "Date: " . htmlentities($Date) . "<br />\n";
echo "Comment:<br />\n";
$Comment = "";
while (!feof($fp)) {
	$Comment .= fgets($fp);
}
echo htmlentities($Comment) . "<br />\n";
echo "<hr />\n";
fclose($fp);
}











		echo "</pre>\n";
		echo "<hr />\n";
		}
	}	
}
?>

<h2>Visitor Feedback</h2>
<hr />
