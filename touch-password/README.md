## web移动端手势密码UI组件
### 基本思路
- 手势生成图线
   - 判断手指移动的目的地和出发地
      - 目前想法onmouseover onmousein onmouseout
      - 注意点，每次移动完一个点，自动定位到该点的中心，并去从该中心去重新出发移动，但此过程手并未离开屏幕
      - 手势错误的判断处理
   - 根据两点去生成图线
      - 目前想法基于canvas去绘图（要通过大的范围去判断出具体在哪，给定具体坐标去绘图）
- 通过数字顺序去判断密码
- 存储localstorage

### 使用说明
### 在线测试地址