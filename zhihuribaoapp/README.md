# 仿知乎日报app页面

---

- Demo：

        html+css+js+jq版本：  

        https://rason00.github.io/rason/zhihuribaoapp/index.html  

        vue版本：  

        https://rason00.github.io/rason/zhihuribaoapp/vue2.0/index.html  

- 仅实现：

        1，主页的banner。

        2，主页内容部分排版与数据显示。

        3，滑动到底部自动加载前一天数据（未实现下拉刷新页面功能）。

        4，文章详情页面版面展示。

- 2017/08/08增加

        使用vue2.0-cli+vue-router+axios+mint-ui制作相同的页面展示（实现功能如上‘仅实现’）。  

- 2017/08/02优化

        优化首页banner，改用插件，做滑动切换效果。

- 2017/07/30优化

        优化首页banner以及详情页顶部图片，适配分辨率图片不变形。

- 2017/07/25修改

        1，把详情页面展示从清空原页面渲染请求内容改为，新增一个文章详情页面。
        
        2，模拟点击文章跳到详情页面后，返回时页面返回到之前跳出的位置。

- 内容部分使用了 https://segmentfault.com/a/1190000009242864 整理的api，在此表示感谢。 

- 另图片加载时遇到了图片防盗链问题，最后在 https://github.com/biaodigit/vue-news 里找到了相应的处理方法，在此表示感谢。

- 建议PC模式下使用chrome移动端模式浏览观看
