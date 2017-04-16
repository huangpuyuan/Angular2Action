# Angular 
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
		* 组件之间有父子关系
	* 服务 Server
		* 用来封装可重用的业务逻辑
	* 指令 Directive
		* 允许在HTML中添加自定义行为
		* 内置了大量的指令
	* 模块 Module 模块用来将应用中不同的部分组织成一个Angular框架可以理解的单元

## 搭建环境
* Nodejs
* Angular CLI
* WebStorm
#### angular 数据绑定的方式
* 属性绑定
* 事件绑定
####  使用Angular Router导航 
>路由的基础知识
* 基本用法
  * Routers ：url对应的哪个组件 以及RouterOutlet中展示的组件
  * RouterOutlet： 在HTML中标记路由呈现位置的占位符指令
  * Router： 负责在运行时执行路由对象，可以通过调研器navigate()和navigateByUrl()方法来导航到一个指定的路由
  * RouterLink：在Html中声明路由导航用的指令
    * 使用[]是一个数组这样可以加参数
  * ActivatedRoute：当前激活的路由对象，保存着这当前路由的信息，如路由地址，路由参数等
* 在路由时传递数据
  * 在查询参数中传递数据
  ```html
    <a [routerLink]="['/product']" [queryParams]="{id:1}">商品详情</a>
  ```
  * 在路由路径中传递数据
  ```typescript
  const routes: Routes =[ {path:/product,component:ProductComponent,data:[{isProd:true}]} => ActivatedRoute.data[0][isProd]]
  
  ngOnInit() {
      this.productId = this.routeInfo.snapshot.params['id'];
    }

  ```
  * 在路由配置中传递数据
* 参数
  * 参数快照 `this.productId = this.routeInfo.snapshot.params['id'];`
  * 参数订阅 `this.routeInfo.params.subscribe((params: Params) => this.productId = params["id"]);`
* 路由高级
  * 重定向路由 把一个地址重定向到另一个地址
  * 子路由：插座`<router-outlet></router-outlet> {path: 'xxx', Component:XxxComponet,Chidren:[{path: 'xxx', Component:XxxComponet}]}`的父子关系
  * 辅助路由：
  ```html
  <router-outlet name="aux"></router-outlet> 
  <a [routerLink]="['/home',{outlets:{aux:'xxx'}]">XXx</a>
  <a [routerLink]="['/product',{outlets:{aux:'yyy'}]">Yyy</a>
  <a [routerLink]="[{outlets:{primary:'home',aux:'chat'}}]">开始聊天</a>
  ```
  ```json
  {path: 'xxx', Component:XxxComponet,outlet:"aux"}
  ```
  * 路由守卫 -- 钩子
  > 只有当用户已经登录并拥有某些权限时才能进入某些路由，一个由多个表单组件组成的向导，例如**注册流程**，用户只有当前路由组建中填写了满足要求的信息才可以导航到下一个路由
  > 另外 当用户未执行保存操作而试图离开当前导航时提醒用户。 
    * CanActive: 处理导航到某个路由的情况
    * CanDeactivate: 处理从当前路由离开的情况
    * Resolve：在路由激活之前获取路由数据
  
  
  
# Angular2Action

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

