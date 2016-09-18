define(['widget','jquery','jqueryUI'],function(widget,$,$UI){
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
			isDraggable: true,
			dragHandle: null,
			text4AlertBt: '确定'
		};
		this.handlers = {};
	};
	Windows.prototype = $.extend({},new widget.Widget(),{
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
				// CFG.handler4AlertBt && cfg.handler4AlertBt();
				boundingBox.remove();
				mask && mask.remove();
				that.fire("alert");
			});
			boundingBox.css({
				width: CFG.width + 'px',
				height: CFG.height + 'px',
				left: (CFG.x || (window.innerWidth - CFG.width)/2 ) + 'px',
				top: (CFG.y || (window.innerHeight - CFG.height)/2) + 'px'
			});
			var mask = null;
			that = this
			if(CFG.hasCloseBt){
				var closeButton = $('<span class="window_closeBt">X</span>');
				closeButton.appendTo(boundingBox);
				closeButton.click(function(){
					// CFG.handler4CloseBt && CFG.handler4CloseBt();
					boundingBox.remove();
					mask && mask.remove();
					that.fire("close");
				});
			}
			if(CFG.skinClassName){
				boundingBox.addClass(CFG.skinClassName);
			}
			if(CFG.hasMask){
				mask = $('<div class="mask"></div>');
				mask.appendTo('body');
			}
			if(CFG.isDraggable){
				if(CFG.dragHandle){
					boundingBox.draggable({handle: CFG.dragHandle});
				} else {
					boundingBox.draggable();
				}
			}
			if(CFG.handler4AlertBt){
				this.on("alert",CFG.handler4AlertBt);
			}
			if(CFG.handler4CloseBt){
				this.on("close",CFG.handler4CloseBt);
			}
			return this;
		},
		confirm: function(){},
		prompt: function(){}
		
	});		
	return {Windows: Windows};
})