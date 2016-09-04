require.config({
	paths: {
		jquery: 'jquery-2.2.2.min'
	}
})
require(['jquery','index'],function($,obj){
	new obj.ChangeImg().show({
		img : ['./img1.jpg','./img2.jpg','./img3.jpg','./img4.jpg'],
		time : 1,
		width : 84,
		height: 56
	})
})