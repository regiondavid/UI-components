### 项目描述
初次接触require.js并用来做UI组件，这个是跟着[阿当大话西游之WEB组件](http://www.imooc.com/learn/99)来学习的，感觉里面的一些开发组件的思路很值得学习。

### 使用说明
因为目前基于requireJS	，所以需要在body底部引入,data-main属性为主文件。
将下方代码放入事件的回调函数中。
``` javascript
var win = new w.Windows();
		win.alert({
			width:300,//定制宽度
			height: 100,//定制高度
			title: '没想好名字的标题',//定制弹出框的标题
			content: 'Are U Sure?',//定制弹出框中的内容
			hasCloseBt: true,//是否需要关闭按钮
			skinClassName: 'windows_skin_a',//选择一套皮肤
			text4AlertBt: 'YES!',//自定义弹出窗的按钮文字
			hasMask: true,//是否有模态
			isDraggable: true,//是否可拖拽
			dragHandle: ".window_header"//拖拽的把手
		})
```
```javascript
<script type="text/javascript" src="http://requirejs.org/docs/release/2.2.0/minified/require.js" data-main="./scripts/main"></script>
```

### 本项目基于开源协议： [MIT](http://choosealicense.com/licenses/mit/#)