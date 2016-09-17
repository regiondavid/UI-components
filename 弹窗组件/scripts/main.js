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
		new w.Windows().alert({
			width:300,
			height: 100,
			y: 200,
			x: 100,
			title: '这是标题',
			content: 'hahaha',
			hasCloseBt: true,
			skinClassName: 'windows_skin_a',
			text4AlertBt: 'haha',
			hasMask: true,
			isDraggable: true,
			dragHandle: ".window_header",
			handler4CloseBt: function(){
				console.log("you close the button");
			},
			handler4AlertBt: function(){
						console.log("You click the button");
					}
		});
	});
})