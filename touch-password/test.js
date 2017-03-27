window.onload = function() {
  var items = document.getElementsByClassName("item");
  var box = document.getElementsByClassName("box")[0];
  var movePoint = {};
  var psd = [];
  var c = document.getElementById("line");
  var cxt = c.getContext("2d");
  var startPoint = {};
  var endPoint = {};
  function Point(ele) {
    this.element = ele;
    this.y = this.element.offsetTop + 40;
    this.x = this.element.offsetLeft + 40;
    this.index = 0;
  } 
  var pointList = [];
  var broadcast = {};
  broadcast.listenList = [];
  broadcast.listen = function(fn) {
    this.listenList.push(fn);
  };
  broadcast.trigger = function() {
    for (var i = 0, fn; fn = this.listenList[i++];) {
      fn.apply(this, arguments);
    }
  };
  [].forEach.call(items, function(ele, index) {
    var item = new Point(ele);
    item.index = index;
    item.change = function(length) {
      // console.log(length.y - item.y);
      if( (length.y - item.y) > 0 && (length.y - item.y) < 55 && 0 < (length.x - item.x) && (length.x - item.x) < 55) {
        console.log(index);
        if (item.element.className == "item") {
          item.element.className = "item checked";
          if (Object.keys(startPoint).length == 0) {
            startPoint.x = item.x;
            startPoint.y = item.y;
          } else {
            endPoint.x = item.x;
            endPoint.y = item.y;
          }
          cxt.moveTo(startPoint.x, startPoint.y);
          cxt.lineTo(endPoint.x, endPoint.y);
          cxt.stroke();
          psd.push(item.index);
          console.log(psd);
        }
      }
    }
    broadcast.listen(item.change);
    pointList.push(item);
  })
  // console.log(pointList);
  document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
    // console.log(e);
    movePoint.x = e.touches[0].clientX;
    movePoint.y = e.touches[0].clientY;
    // console.log(e.touches[0].clientX);
    // console.log(movePoint);
    broadcast.trigger(movePoint);
  }, false);
}