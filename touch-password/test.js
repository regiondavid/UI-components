window.onload = function() {
  var items = document.getElementsByClassName("item");
  var box = document.getElementsByClassName("box")[0];
  var labels = document.getElementsByTagName("label");
  var info = document.getElementsByClassName("info-text")[0];
  var c = document.getElementById("line");
  var canvasW = window.innerWidth;
  var canvasH = window.innerHeight;
  var movePoint = {};
  var psd = [];
  var testpsd = [];
  var ctx = c.getContext("2d");
  var startPoint = {};
  var endPoint = {};
  var mode = "设置密码";
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
        if (item.element.className == "item") {
          item.element.className = "item checked";
          if (Object.keys(startPoint).length == 0) {
            startPoint.x = item.x;
            startPoint.y = item.y;
          } else {
            endPoint.x = item.x;
            endPoint.y = item.y;
          }
          ctx.beginPath();
          ctx.moveTo(startPoint.x, startPoint.y);
          ctx.lineTo(endPoint.x, endPoint.y);
          ctx.strokeStyle = "#ff4500";
          ctx.stroke();
          startPoint.x = item.x;
          startPoint.y = item.y;
          psd.push(item.index);
        }
      }
    }
    broadcast.listen(item.change);
  })
  document.getElementsByClassName("container")[0].addEventListener('touchmove', function(e) {
    e.preventDefault();
    movePoint.x = e.touches[0].clientX;
    movePoint.y = e.touches[0].clientY;
    broadcast.trigger(movePoint);
  }, false);
  document.getElementsByClassName("container")[0].addEventListener('touchend', function(e) {
    e.preventDefault();
    if(mode == "设置密码") {
      if(psd.length < 5 && testpsd.length == 0) {
        info.innerText = "密码太短，至少需要5个点";
        init();
      } else {
        if (testpsd.length == 0) {
          testpsd = psd;
          init();
          info.innerText = "请再次输入手势密码";
        } else {
          if (testpsd.toString() == psd.toString()) {
            localStorage.setItem("touchPsd", psd);
            info.innerText = "密码设置成功";
            testpsd = [];
            init();
          } else {
            info.innerText = "两次输入的不一致";
            init();
            testpsd = [];
          }
        }
      }
    } else if (mode == "验证密码") {
      if (psd.toString() == localStorage.touchPsd) {
        info.innerText = "密码正确！";
        init();
      } else {
        info.innerText = "输入的密码不正确";
        init();
      }
    }
  }, false);
  [].forEach.call(labels, function(ele) {
    ele.addEventListener('click', function() {
      mode = ele.innerText;
    }, false);
  })
  function init() {
    movePoint = {};
    psd = [];
    startPoint = {};
    endPoint = {};
    [].forEach.call(items, function(ele) {
      ele.className = "item";
    });
    ctx.clearRect(0, 0, canvasW, canvasH);
  }
}