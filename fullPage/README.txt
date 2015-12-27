https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.5/jquery.fullPage.min.css

https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js

https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.5/jquery.fullPage.min.js

用于 easing 参数，也可以使用完整的 jQuery UI 代替，如果不需要设置 easing 参数，可去掉改文件
https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.5/vendors/jquery.easings.min.js

如果 scrollOverflow 设置为 true，则需要引入 jquery.slimscroll.min.js，一般情况下不需要
https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.5/vendors/jquery.slimscroll.min.js


<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.5/jquery.fullPage.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.5/vendors/jquery.easings.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.5/vendors/jquery.slimscroll.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.5/jquery.fullPage.min.js"></script>

配置项

选项	                 类型	      默认值	           说明
sectionsColor         数组          无            设置每一项的背景颜色,eg:['green','orange','gray','red']
controlArrows         布朗          true          是否使用箭头滚动幻灯片,默认值为true
verticalCentered      布朗          true          内容是否垂直居中,false表示自己设计样式
scrollingSpeed	      整数	       700	          滚动速度，单位为毫秒
anchors	              数组          无	           定义锚链接,锚链接的值不要和任意页面的id或name相同
css3	                布尔值	      false	         是否使用 CSS3 transforms 滚动
easing	              字符串	      easeInQuart	   滚动动画方式
loopBottom	          布尔值	      false	         滚动到最底部后是否滚回顶部
loopTop	              布尔值	      false	         滚动到最顶部后是否滚底部
loopHorizontal	      布尔值	      true	         左右滑块是否循环滑动
autoScrolling	        布尔值	      true	         是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条
scrollBar             布尔值        false         是否显示浏览器滚动条
paddingTop	          字符串	      0	             与顶部的距离
paddingBottom	        字符串	      0	             与底部距离
fixedElements	        字符串	      无	            设置滚动时固定不变的元素
keyboardScrolling     布尔值	      true	         是否使用键盘方向键导航
touchSensitivity	    整数	      5	              在移动设备中的滑动阻尼(难度)
continuousVertical	  布尔值	      false	         是否循环滚动，与 loopTop 及 loopBottom 不兼容
animateAnchor	        布尔值	      true	         通过锚链接进入某处时,是否使用动画
menu	                布尔值	      false	         绑定菜单，设定的相关属性与 anchors 的值对应后，菜单可以控制滚动
navigation	          布尔值	      false	         是否显示项目导航,设置为true时会出现小圆点
navigationPosition	  字符串	      right	         项目导航的位置，可选 left 或 right
navigationTooltips	  数组	      空	             项目导航的tip
showActiveTooltip     布朗值        false         是否显示导航的tip
slidesNavigation      布朗值        false         是否显示横向幻灯片导航
slidesNavPosition     字符串        bottom        横向幻灯片导航的位置,可选top 或
scrollOverflow	      布尔值	      false	         内容超过满屏后是否显示滚动条,需要导入slimscroll
sectionSelector       字符串        .section      section选择器
slideSelector         字符串        .slide        slide选择器

方法

格式$.fn.fullpage.xxx()

名称	                                        说明
moveSectionUp()	                            向上滚动一页
moveSectionDown()	                        向下滚动一页
moveTo(section, slide)	                    滚动到,section从1开始,slide从0开始
silentMoveTo(section, slide)                和moveto效果一样,只是没有动画效果
moveSlideRight()	                        slide 向右滚动
moveSlideLeft()	                            slide 向左滚动
setAutoScrolling()	                        设置页面滚动方式，设置为 true 时自动滚动
setLockAnchors()
setRecordHistory()
setScrollingSpeed()         	            定义以毫秒为单位的滚动速度
setAllowScrolling(boolean,[directions])	    添加或删除鼠标滚轮/触控板控制,后边参数包括all,up,down,left,right
destory(type)                               type可以不写,或写'all',不写保留添加的样式和html,写all则销毁全部
reBuild()                                   使用ajax重构页面后,用该方法可重建效果


延迟加载图片/视频 change your src attribute to data-src

<img data-src="image.png">

<video>
    <source data-src="video.webm" type="video/webm" />
    <source data-src="video.mp4" type="video/mp4" />
</video>

回调函数

名称	                                 说明
afterLoad(anchorLink,index)	         滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
onLeave(index,nextIndex,direction)	 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：
                                     index 是离开的“页面”的序号，从1开始计算；
                                     nextIndex 是滚动到的“页面”的序号，从1开始计算；
                                     direction 判断往上滚动还是往下滚动，值是 up 或 down。
                                     通过return false; 取消滚动
afterRender()	                     页面结构生成后的回调函数，或者说页面初始化完成后的回调函数
afterResize()                        页面尺寸发生改变时,调用的函数
afterSlideLoad	                     滚动到某一水平滑块后的回调函数，与 afterLoad 类似，
                                     接收 anchorLink、index、slideIndex、direction 4个参数
onSlideLeave	                     某一水平滑块滚动前的回调函数，与 onLeave 类似，
                                     接收 anchorLink、index、slideIndex、direction 4个参数
