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
		renderUI: function(){
			this.boundingBox = $('<div class="windows_boundingBox">'+
									'<div class="window_header">'+this.cfg.title+'</div>'+
									'<div class="window_body">'+this.cfg.content+'</div>'+
									'<div class="window_footer"><input type="button" class="window_alertBtn am-btn-success" value="'+this.cfg.text4AlertBt+'"></div>'+
								'</div>');
			if(this.cfg.hasMask){
				this._mask = $('<div class="mask"></div>');
				this._mask.appendTo('body');
			}
			if(this.cfg.hasCloseBt){
				this.boundingBox.append($('<span class="window_closeBt">X</span>'));
			}
			this.boundingBox.appendTo(document.body);
		},
		bindUI: function(){
			var that = this;
			this.boundingBox.delegate('.window_alertBtn', 'click', function() {
				that.fire("alert");
				that.destroy();
			}).delegate('.window_closeBt','click',function(){
				that.fire("close");
				that.destroy();
			});
			if(this.cfg.handler4AlertBt){
				this.on("alert",this.cfg.handler4AlertBt);
			}
			if(this.cfg.handler4CloseBt){
				this.on("close",this.cfg.handler4CloseBt);
			}
		},
		syncUI: function(){
			this.boundingBox.css({
				width: this.cfg.width + 'px',
				height: this.cfg.height + 'px',
				left: (this.cfg.x || (window.innerWidth - this.cfg.width)/2 ) + 'px',
				top: (this.cfg.y || (window.innerHeight - this.cfg.height)/2) + 'px'
			});
			if(this.cfg.skinClassName){
				this.boundingBox.addClass(this.cfg.skinClassName);
			}
			if(this.cfg.isDraggable){
				if(this.cfg.dragHandle){
					this.boundingBox.draggable({handle: this.cfg.dragHandle});
				} else {
					this.boundingBox.draggable();
				}
			}
		},
		destructor: function(){
			this._mask && this._mask.remove();
		},
		alert: function(cfg){
			$.extend(this.cfg,cfg);
			this.render();
			return this;
		},
		confirm: function(){},
		prompt: function(){}
		
	});		
	return {Windows: Windows};
})