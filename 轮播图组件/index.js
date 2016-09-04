define(['jquery'],function ($) {
	function ChangeImg() {
		this.cfg = {
			img : ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'],
			time : 1000,
			width : 84,
			height: 56,
			showP: 2
		}
	};
	ChangeImg.prototype = {
		show: function(cfg){
			var CFG = $.extend(this.cfg,cfg);
			var imgLast = CFG.img.pop();
			var imgFirst = CFG.img.shift();
			CFG.img.unshift(imgLast,imgFirst);
			CFG.img.push(imgLast,imgFirst);
			var imgBox = $('<div class="imgBox">'+
								'<div class="imgList"></div>'+
							'</div>');
			imgBox.appendTo('body');
			CFG.img.forEach(function(ele,index){
				var a = "./images/" + ele;
				$('<img class="showImg" src="'+a+'">').appendTo('.imgList');
			});
			if (CFG.showP<=CFG.img.length) {
				$('.imgBox').css({
					width: CFG.width*CFG.showP + 'px',
					height: CFG.height + 'px'
				});
				$('.imgList').css({
					width: CFG.width*CFG.img.length + 'px',
					height: CFG.height + 'px',
					left: -CFG.width + 'px'
				});
				// setInterval(function(){
				// 	if ($('.imgList').left=='0px') {
				// 		$('.imgList'.css('left',(CFG.showP-CFG.img.length)*CFG.width + 'px'));
				// 	} else if($('.imgList').left==(CFG.showP-CFG.img.length)*CFG.width + 'px'){
				// 		$('.imgList'.css('left',(-CFG.width)+'px'));
				// 	} else {
				// 		$('.imgList').animate({left:-CFG.width+'px'}, 30);
				// 	}
				// },CFG.time)
				setInterval(function(){
						$('.imgList').animate({left:-CFG.width+'px'}, 30);
					},500);	
			}
		}
	}
	return {ChangeImg: ChangeImg};
})