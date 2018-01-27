// require(['model2'],function(m2){
// 	console.log(m2.a*m2.b);
// });
require.config({
	paths: {
		jquery: 'jquery-2.2.2.min',
		jqueryUI: 'jquery-ui.min'
	}
})
require(['jquery','windows'],function($,w){
	$('#a').click(function(){
		var win = new w.Windows();
		win.alert({
			width:300,
			height: 100,
			title: '没想好名字的标题',
			content: 'Are U Sure?',
			hasCloseBt: true,
			skinClassName: 'windows_skin_a',
			text4AlertBt: 'YES!',
			hasMask: true,
			isDraggable: true,
			dragHandle: ".window_header"
		}).on("alert",function(){console.log("You click the button");
		}).on("close",function(){console.log("you close the button");})
		win.on("alert",function(){console.log("the second alert handler")});
		win.on("alert",function(){console.log("the first alert handler")});
		win.on("close",function(){console.log("the second close handler")});
	});
})