<!DOCTYPE html>
<html>
<body>

<p>This example calls a function which outputs "Hello World" in a p element with id="demo".</p>

<p id="demo"></p>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World!";
}

myFunction();
</script>

</body>
</html>

