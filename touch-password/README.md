## web移动端手势密码UI组件
### 基本思路
- 手势检测
   - 采用 `touchmove` + `touchend` 去检测手指滑动。随着 `touchmove`，它的 `event` 的 `touches` 的 `clinetX` 和 `clientY`在不停的变化，并把他们单独放在一个 `movePoint` 的对象中，便于管理。
   - 将每一个圆圈封装成一个对象，包括圆心坐标、对应的 `element` 和对应的 `index`，还有要监听的事件
   - 采用观察者模式，去做事件广播，每一个圆圈都订阅 `movePoint` ，每次 `movePoint` 变化都去发送一次消息，然后由每个圆圈所在的对象去自己判断圆心和  `movePoint` 的距离。当处于圆中（圆心和 `movePoint` 的距离绝对值小于半径）时，改变自己的class，同时作为 `canvas` 一步的起点。
- 绘制手势路径
    - 准备好画布，画布的 `left` 和 `top` 要对齐，然后绘制，切记要先 `beginPath`，判断如果为第一个点就把起点设好，把满足条件的下一个点设为终点，然后绘制直线，绘制完成一段后，把终点再设为起点，循环画下去，但已画过的点不会再画。最后通过 `touchend` 去判断最后一个点。
- 通过数字顺序去判断密码
    - 划过一个点去将自己的index存进一个数组，当 `touchend` 后，那个数组就是我们的密码，同时保持着我们划过的顺序。
- 存储localstorage
    - 把获得好的密码按照指定的逻辑判断通过后就可以直接存进localstorage了
- 初始化
    - 在输错密码或者一些其他的错误情况下，我们都需要初始化，让用户重新输入。我采用的是把中间的一些变量恢复成初始值，并把 `canvas` 的路径清空。

### 项目地址
[Github](https://github.com/regiondavid/UI-components/tree/master/touch-password)

### 在线测试地址

[在线查看](http://120.25.85.240/UI-components/touch-password/test.html)

或扫描二维码

![Markdown](http://i1.piimg.com/1949/aa167fe20f2d4a26.png)

### 感想
踩坑很多，收获很多