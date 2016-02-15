// var box = document.getElementById("#write");

  var box = document.getElementById("write");
  var leftover = document.getElementById("subText");

  // console.log(25 - remainder);
  // leftover.innerHTML = ("you have " + (25 - remainder) + " characters left");

  box.onkeyup = function() {
    var remainder = box.value.length;
    leftover.innerHTML = ("you have " + (25 - remainder) + " characters left");
  };
