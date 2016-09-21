define(['jquery'],function($){
	function Widget(){
		this.boundingBox = null;
	}
	Widget.prototype = {
		on: function(type,handler){
			if (typeof this.handlers[type] == "undefined") {
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler);
			return this;
		},
		fire: function(type,data){
			if (this.handlers[type] instanceof Array) {
				var handlers = this.handlers[type];
				for(var i=0,len=handlers.length;i<len;i++){
					handlers[i](data);
				}
			}
		},
		renderUI: function(){}, //创建DOM节点
		bindUI: function(){},	//绑定事件
		syncUI: function(){},	//初始化UI
		render: function(container){
			this.renderUI();
			this.bandlers = {};
			this.bindUI();
			this.syncUI();
			$(container||document.body).append(this.boundingBox);
		},
		destructor: function(){},
		destroy: function(){
			this.destructor();
			this.boundingBox.off();
			this.boundingBox.remove();
		}

	}
	return {
		Widget: Widget
	}
})