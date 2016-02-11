<html>
<body>
<title>File DownLoader</title>
<?php
$Dir = "files";
if (isset($_GET['filename'])) {
$FileToGet = $Dir . "/" . stripslashes($_Get['filename']);
if (is_readable($FileToGet)){
header("Content-Description: File Transfer");
header("Content-Type: application/force_download");
header("Content-Disposition: attachment; filename=\"" . $_GET['filename'] . "\"");
header("Content-Transfer_Encoding: base64");
header("Content-Length: " . filesize($FileToGet));
readfile($FileToGet);
$ShowErrorPage = FALSE;




}
else {
	$ErrorMsg = "Cannot read \"$FileToGet\"";
	$ShowErrorPage = TRUE;
	}
}
else {
	$ErrorMsg = "No filename specified";
	$ShowErrorPage = TRUE;
}
if ($ShowErrorPage) {



?>
<!DOCTYPE html Public "-//W3C//DTD XHTML 1.0 STRICT//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>File DownLoad Error</title>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
</head>
<body>
<p>There was an error downloading "<?php echo htmlentities($_GET['filename']); ?>"</p>
</body>
</html>
<?php
}
?>
