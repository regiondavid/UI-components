define(['jquery'],function($){
	function Windows(){
		this.cfg = {
			width: 500,
			height: 300,
			title: '',
			content: '',
			hasCloseBt: false,
			skinClassName: null,
			handler4AlertBt: null,
			handler4CloseBt: null,
			hasMask: false,
			text4AlertBt: '确定'
		}
	};
	Windows.prototype = {
		alert: function(cfg){
			var CFG = $.extend(this.cfg,cfg);
			var alertTitle = $('<h2 class="h2-title"></h2>')
			var boundingBox = $('<div class="windows_boundingBox">'+
									'<div class="window_header">'+CFG.title+'</div>'+
									'<div class="window_body">'+CFG.content+'</div>'+
									'<div class="window_footer"><input type="button" value="'+CFG.text4AlertBt+'"></div>'+
								'</div>');
			boundingBox.appendTo('body');
				$('.window_footer').click(function() {
				CFG.handler4AlertBt && cfg.handler4AlertBt();
				boundingBox.remove();
				mask && mask.remove();
			});
			boundingBox.css({
				width: CFG.width + 'px',
				height: CFG.height + 'px',
				left: (CFG.x || (window.innerWidth - CFG.width)/2 ) + 'px',
				top: (CFG.y || (window.innerHeight - CFG.height)/2) + 'px'
			});
			var mask = null;
			if(CFG.hasCloseBt){
				var closeButton = $('<span class="window_closeBt">X</span>');
				closeButton.appendTo(boundingBox);
				closeButton.click(function(){
					CFG.handler4CloseBt && CFG.handler4CloseBt();
					boundingBox.remove();
					mask && mask.remove();
				});
			}
			if(CFG.skinClassName){
				boundingBox.addClass(CFG.skinClassName);
			}
			if(CFG.hasMask){
				mask = $('<div class="mask"></div>');
				mask.appendTo('body');
			}
		},
		confirm: function(){},
		prompt: function(){}
	}		
	return {Windows: Windows};
})