window.onload = function() {
  var items = document.getElementsByClassName("item");
  var box = document.getElementsByClassName("box")[0];
  var canvasW = window.innerWidth;
  var canvasH = window.innerHeight;
  var movePoint = {};
  var psd = [];
  var c = document.getElementById("line");
  var cxt = c.getContext("2d");
  var startPoint = {};
  var endPoint = {};
  c.width = canvasW;
  c.height = canvasH;
  function Point(ele) {
    this.element = ele;
    this.y = this.element.offsetTop + 40;
    this.x = this.element.offsetLeft + 40;
    this.index = 0;
  } 
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
      if( (length.y - item.y) > -40 && (length.y - item.y) < 40 && -40 < (length.x - item.x) && (length.x - item.x) < 40) {
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
          console.log(startPoint);
          cxt.lineTo(endPoint.x, endPoint.y);
          cxt.strokeStyle = "#ff4500";
          cxt.stroke();
          startPoint.x = item.x;
          startPoint.y = item.y;
          psd.push(item.index);
          console.log(endPoint);
        }
      }
    }
    broadcast.listen(item.change);
    psd.push(item.index);
  })
  document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
    movePoint.x = e.touches[0].clientX;
    movePoint.y = e.touches[0].clientY;
    broadcast.trigger(movePoint);
  }, false);

  document.body.addEventListener('touchend', function(e) {
    e.preventDefault();
    
  }, false);
  function init() {
    movePoint = {};
    psd = [];
    startPoint = {};
    endPoint = {};
  }
}