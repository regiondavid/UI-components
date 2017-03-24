window.onload = function() {
  var test1 = document.getElementById("test1");
  var test2 = document.getElementById("test2");
  // test1.onmousedown = function(event) {
  //   // console.log(1);
  //   // console.log(event.clientX)

  // }
  // test1.onmouseup = function() {
  //   console.log("up");
  // }
  test1.ontouchmove = function(event) {
    alert(event.clientX)
    console.log(2);
  }
}