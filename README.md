# Angular2
> 回顾AngularJs 。Angular1.x一般称为AngularJS 。Angular2版本以上称之为Angular

### AngularJS优势
* 模板功能强大丰富
* 比较完善的前端MVC框架
* 引入了Java的一些思想

### AngularJs的一些问题  
* 性能(双向数据绑定的双刃剑)
	* 脏检查，随着绑定的数据量的增加性能减少
* 路由功能ng-view只能有一个不能嵌套多个 
* 作用域$scope,原生事件不能绑定的问题
* 表单验证的功能，显示错误信息 | Angular2 有响应式表单进行复制的校验
* Javascript的本身的问题 | Angular2 使用Typescript在编译端解决大量BUG
* 学习成本高 学习大量概念React学习成本就比较小了|Angualar核心就是组件，装饰器的语法比JSx还要人性化。

### Angular 新特性 
> 推荐文章 [这才是 Angular2 的灵魂！](http://www.open-open.com/lib/view/open1473923872636.html)

* 全新的命令行工具 AngularCLI
* 服务器端渲染 搜索引擎优化SEO效果大大提升
* 移动和桌面的兼容 利用一些UI框架很容易实现跨平台的手机应用。UI库叫做[angular-meteor](https://angular-meteor.com/) 
	* Material Design 是 Google 提出来的一种 UI 设计原则，终极的目标是：用一套 UI 设计规范来兼容各种各样的设备，例如桌面、平板、大屏幕的电视、车载系统、甚至 watch，从而保证用户体验的一致性。

### 架构比较

* AngularJS 架构 
	* 典型的MVC架构
* Angular 架构
	* 组件架构--组件树上被激活的应用
* 与React
	* 速度
		* React本身速度快 —— 利用虚拟DOM的思想 
		* Angular2类似的方式，实现了新的变更检测算法，速度和React不相上下 
	* FLUX架构 es6语法通过webpack工具进行编译
		* Angular也已经具备这些优点
		* 组件化
		* 数据单项更新
		* es6语法
	* 服务器渲染 --- 单页应用
	 	* 预渲染应用
	* 可是React的目标是UI组件通常和其他框架组合使用。比如没有Promise
* 与Vue
	* 简单
		* 尽可能简单的API
		* 文档中文，国内大牛写的
	* 灵活
		* 官方的工具
	* 性能
		* vue体积小
	* 问题：
		* vue个人主导的项目 |  而Angular是Google主导的项目，在世界范围之内有庞大的开发者社区配套的生态环境
		* vue只关注web | 而Angular可以开发Native项目
		* 服务器渲染,只能靠第三方的库或服务来实现|Angular有官方提供的服务器渲染支持，解决vue这种纯前端框架无法解决的一些痛点


## 开始学习Angular
* 学习内容
	* Angular 程序框架 构件块
	* Angular CLI 命令行
	* 组件 Component
		* 组件是Angular应用的基本构建快，你可以吧一个组件理解为一段带有业务逻辑和数据的HTML