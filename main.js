<body bgcolor="#FFFFFF" text="#0000FF"
	onload="window.setTimeout('getSecs()',1)">

<script language="JavaScript">
startday = new Date();
clockStart = startday.getTime();

function initStopwatch() {
	var myTime = new Date();
	var timeNow = myTime.getTime();
	var timeDiff = timeNow - clockStart;
	this.diffSecs = timeDiff/1000;
	return(this.diffSecs); }

function getSecs() {
	var mySecs = initStopwatch();
	var mySecs1 = ""+mySecs;
	mySecs1= mySecs1.substring(0,mySecs1.indexOf(".")) + " secs.";
	document.forms[0].timespent.value = mySecs1
	window.setTimeout('getSecs()',1000); }

</script>

<form>
  <p align="center"><strong>
   Вы находитесь на этой странице уже:</strong></font>
   <input type="text" size="9" name="timespent"></p>
</form>

<br><br><br>

<p align="center"><a href="clock1.php"><font color="#000000">
<strong>Посмотрите еще один вариант.</strong></font></a></p>

<form>
  <p align="center">
  <input type="button" value="  НАЗАД  " onclick="Home()">
   <script>
	function Home()
	{location.href="/java/example.php";}
   </script></p>
</form>