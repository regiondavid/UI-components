window.onload = function() {
  var items = document.getElementsByClassName("item");
  var box = document.getElementsByClassName("box")[0];
  var movePoint = {};
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
      if( (length.y - item.y) > 0 && (length.y - item.y) < 40 && 0 < (length.x - item.x) && (length.x - item.x) < 40) {
        console.log(index);
        item.element.className = "item checked";
      }
    }
    broadcast.listen(item.change);
    pointList.push(item);
  })
  console.log(pointList);
  box.addEventListener('touchmove', function(e) {
    e.preventDefault();
    // console.log(e);
    movePoint.x = e.touches[0].clientX;
    movePoint.y = e.touches[0].clientY;
    // console.log(e.touches[0].clientX);
    // console.log(movePoint);
    broadcast.trigger(movePoint);
  }, false);
}