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
9.20更新：尝试利用requireJS的官方打包工具r.js，结果迷之bug，经过一番查询，发现r.js有着诸多不好之处，遂转而用更好更强大的webpack进行打包
利用requireJS写过之后，感觉对webpack更加熟悉了，有些东西或者写法能够比较了解了。写了个练习webpack的demo文件，见package-test文件夹。之后会逐渐把组件改到webpack打包的形式。再之后感觉就可以上ant-tool了。。。

9.22更新
此前一直对组件生命周期有点疑惑，特别是看react的时候。
这个组件的生命周期是分为两部分，一个是render，一个是distroy。在render中，定义了三个方法，分别进行DOM操作、事件绑定以及初始化UI的渲染。而在distroy中则是进行了销毁前的事件处理，以及对所有事件的解绑，最后才是销毁节点。
感觉通过这样的生命周期去设计组件，逻辑更加清晰，更有层次感。同时使用相同的生命周期，使得使用时必须用统一的接口去处理组件，整体性更统一。

### 本项目基于开源协议： [MIT](http://choosealicense.com/licenses/mit/#)