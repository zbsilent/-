[toc]

# React学习



[<img src="https://raw.githubusercontent.com/zbsilent/imag/main/rootgithubb.svg" alt="github" style="zoom:10%;" />![](https://img.shields.io/badge/React-zbsilent-brightgreen)](https://github.com/zbsilent)

-----

#### angular （google） 、react（facebook）、vue（中国）

原生JS本身操作dom消耗性能

库和框架是一个意思么？

库是对原生js的高度封装 jquery/zerpto

框架 ： 本质上修改了js的思想 解决了一些终端程序上的问题 

----

#### 区别

> angular 
>
> > 1.x mac框架

> > 2.x mvvm

> react

> > 优势 

> > > - 虚拟dom

> > > - 性能高

> > > - 解决了一些（pc，移动端问题）

> > 劣势

> > > - 入门困难，学习成本高

> > > - react本身能做的事情不多、依赖插件库比较多

> vue2.x的迭代的时候 也用到了虚拟dom 





----

> 接受作者的思想

#### 书写格式 jsx



单个标签

```react
let a= <div>hello react!</div>
```

多个标签

```react
let a = <div><div>asdfa</div><span>adsfa</span></div>
```

可以自由缩进、允许加括号

```react
let a = <div>
          <div>sasdfa</div>
          <span>test</span>
    	  </div>
```

单标签规则 - 必须闭合

```jsx
<img/>
```

class - className

```react
<div class ='aaa'></div> 
<div className='aaaa'></div>
```

jsx里使用js代码

```jsx
var a ='hello react!';
let b =<div>{a}</div>
```

----

#### react 开发模式

1.直接引入 - 简单 

```react
<script src ='react.js'></script>
```

2.脚手架模式 基于webpack



react.js - 核心js

react-dom.js - 虚拟dom

babel ？ jsx 



==bower== - js所有的框架库包管理器

```shell
npm install bower - g

bower info （信息）
      install （安装）
      
bower info react 默认最高版本
#15.6.1 指定版本

```



----

```shell
npm install -g create-react-app

create-react-app react_test
```



----



采用引用的方式

```react
<html>
<head>
	<meta charset="utf-8">
	<script type="text/javascript" src='/Users/zbsilent/bower_components/react/react.development.js'></script>
	<script type="text/javascript" src='/Users/zbsilent/bower_components/react/react-dom.development.js'></script>
	<script type="text/javascript" src='/Users/zbsilent/bower_components/babel/browser.js'></script>
</head>
<body>
  <div id='app'></div>

  <script type="text/babel">
    let a = <h1>hello recat!</h1>
    ReactDOM.render(
    a,
    document.getElementById('app')
    )
  </script>
<body>
</html>

```

 引用js代码用{}

```jsx
  <div id='app'></div>

  <script type="text/babel">

    var b = 'hello world'
    let a = <h1 className='leo'>hello recat! {b}</h1>
    ReactDOM.render(
    a,
    document.getElementById('app')
    )
  </script>


<div id='app'></div>

  <script type="text/babel">
    var imgSrc = 'https://www.baidu.com/img/bd_logo1.png'
    var b = 'hello world'
  	var c ='leo'
    let a = (<div><!--这必须用闭合标签-->
              <img src={imgSrc}/><!--这里用花括号-->
              <h1 className={c} style={{'background':'green'}}>hello recat! {b}<!--第一层要使用js代码--></h1>
             </div>)
    ReactDOM.render(
    a,
    document.getElementById('app')
    )
  </script>
```

支持使用style - 里面说过json

```jsx
<h1 className='leo' style={{'background':'green'}}>hello recat! {b}</h1>
```

第一层告诉jsx我用使用js 第二层是json的 

`事件`

 使用驼峰命名法 单词首字母大写 第一个单词之后的首字母大写

onClick - > onClick 



### 第二课

-----

#### 回顾

ReactDOM.render(jsx(组件、内容)、放到哪)

`面向对象`

```jsx
<script>
    function show(){
      console.log(this);
    };
    // console.log(typeof new show())
    //show();//this 指向window
    //new show();//this 指向本身
  </script>
```



类 constructor 

原型 - prototype（所谓的方法）

原型链  __proto__

`React面向对象`



constructor - 默认执行的函数

不支持变量提升

```react
class Leo{
        constructor(name){
          this.name = name;
          //默认执行 比如私有属性 默认传参
          alert(name)
        }
        //原型
        show(x){
          console.log(this.name)
          //alert(x)
        }
    };
    //console.log(typeof leo)
    new Leo('liqiaang').show('m');
```



class 函数名称

函数调用时 默认执行 constructor函数

constructor - 里面写一些初始的内容 

原型就是和constructor同级的函数即可

```jsx
  class Small extends Leo{
      constructor(x){
        super(x);
        this.aaa = 20;
      }
    }
```



继承 extends  继承原型和私有属性

如果子类想使用this 必须使用<kbd>super</kbd>



### 组件开发

-----

```jsx
class Leo extends React.Component{
    render(){
      return <div>hello react!</div>
    }
  }
  ReactDOM.render(<Leo/>,app)
```

```jsx
class 自定义名 extends React.Component {
	render(){
		return (要渲染的内容)
	}
}
```

es6+jsx语言

<kbd>标签  属性 参数</kbd>

组件首字母必须大写

使用props获取参数

```jsx
  class Leo extends React.Component{
    render(){
      console.log(this);
      return (<div>
                <input type='button' value='改变' onClick={this.show}/>
                <br/>
                <span>hello react!</span>
                <h1>{this.props.value}</h1>
              </div>)
    }
    show(){
      //alert(1);
      console.log(this);
			//这里this必须得指向render里去
    }
  }
  ReactDOM.render(<Leo value='12'/>,app)
```



目前这里的this指向是这里



![image-20210309160408532](/Users/zbsilent/Library/Application Support/typora-user-images/image-20210309160408532.png)

**改变this指向**

```jsx
  function show(...val){
    //this.prototype.k = 10 ;
    console.log(val)
  };
  show.call(String,1,2,3,4,5,6);
  console.log('asd'.k);
  </script>
```

1.call

- 1.第一个参数可以改变函数的this
- 2.从第一个参数之后的参数就是对应函数的形参
- 3.函数会默认直接调用

2.apply

- 1.第一个参数可以改变函数的this
- 2.从第一个参数之后的参数就是数组对象
- 3.函数会默认直接调用

3.bind

- 1.第一个参数可以改变函数的this
- 2.从第一个参数之后的参数就是数组对象
- 3.函数不会默认直接调用



![image-20210309162127140](/Users/zbsilent/Library/Application Support/typora-user-images/image-20210309162127140.png)







------





![image-20210309162028465](/Users/zbsilent/Library/Application Support/typora-user-images/image-20210309162028465.png)

==props== 只能读、不能写

state去改变、初始化环境去改变，即构造函数里

数据可渲染 

- json 改变数据的方式 不会进行渲染
- setState view层进行渲染

```jsx
class Leo extends React.Component{
    constructor(){
      super();
      this.state = {
        msg:'hello react'
      }
    }
    render(){
      console.log(this);
      return (<div>
                <input type='button' value='改变' onClick={this.show.bind(this)}/>
                <br/>
                <span>{this.state.msg}</span>
                <h1>1111</h1>
              </div>)
    }
    show(){
      this.setState({
        msg:'chanege'
      })
    }
  }
  ReactDOM.render(<Leo/>,app)
```



 

----

### 显示隐藏小测试

```jsx

  class Title extends React.Component{
    constructor(){
      super();
      this.state = {
        show:'block'
      }
    }
    render(){
      return (<div>
                <input type='button' value='切换' onClick={this.change.bind(this)}/>
                <br/>
                <div className='div' style={{display:this.state.show}}></div>
              </div>)
    }
    change(){
      this.setState({
        show:this.state.show == 'block'?'none':'block'
      })
    }
  }
  ReactDOM.render(<Title/>,app);
```

#### 小时钟

```jsx
  class Clock extends React.Component{

    constructor(){
      super();
      this.state = {
        time : new Date()
      }
      //定时器 箭头函数指向不会出问题
      setInterval(()=>{
         this.setState({
           time : new Date()
         })
      },1000)
     }
    // <h1>{this.props.time.toLocaleDateString()} {this.props.time.toLocaleTimeString()}</h1>

    render(){
       return (<div>
        <h1>{this.state.time.toLocaleString()}</h1>
        </div>)
    }
  //
  }
  //
  // ReactDOM.render(<Clock time={new Date()}/>,app);
  ReactDOM.render(<Clock/>,app);
```



#### 时间加减



```jsx
class NumberNode extends React.Component{

    constructor(){
      super();
      this.state = {
        number: 0
      }
     }

    render(){
       return (
         <div>
            <input type='button' value ='-' onClick={this.last.bind(this)}/>
            <div>{this.state.number}</div>
            <input type='button' value='+' onClick={this.next.bind(this)}/>
         </div>
       )
    }

    last(){
      this.setState({
        number: this.state.number == this.props.min?Number(this.props.min):this.state.number- 1
      })
    }
    next(){
      this.setState({
        number: this.state.number == this.props.max?Number(this.props.max):this.state.number + 1
      })
    }
  }

  ReactDOM.render(<NumberNode min='0' max='15'/>,app);
```



----

  #### 事件对象获取非本身（事件源元素）

```jsx
<input type='text' onInput={this.change.bind(this)} id= 'inputNode' ref='leo'/>
```



 ```jsx
 document.onClick = function a(e) {
    // body...
    console.log(e.target)
  }
 ```



  - target 指向事件源 



```jsx
change(e){
      //console.log(e.target.value) //获取本身事件源头
      console.log(this.refs.leo.value) //react封装的方法
      this.setState({
        msg:document.getElementById('inputNode').value //js原生
      })
    }
```



----

#### 拖拽

```jsx
*{margin:0;padding:0;}
     .dragNode{width:200px;height:300px;background:blue;position:absolute;}

class Drag extends React.Component{
    constructor(){
      super();
      this.state ={
        needX :10,
        needY:0
      }
      this.disX = 0 ;
      this.disY = 0;

    }

    render() {
      return (
        <div className='dragNode' style={{left:this.state.needX,top:this.state.needY}} onMouseDown={this.fnDown.bind(this)}></div>
        
      )
    }

    fnDown(e){
      console.log(e.clientX,e.target.offsetLeft)
      this.disX = e.clientX  - e.target.offsetLeft;
      this.disY = e.clientY  - e.target.offsetTop;
      document.onmousemove = this.fnMove.bind(this);
      document.onmouseup = this.fnUp.bind(this);
    }

    fnMove(e){
      this.setState({
        needX : e.clientX - this.disX,
        needY : e.clientY - this.disY
      })
    }
    fnUp(){
      document.onmousemove = null;
      document.onmouseup = null;
    }

  }

  ReactDOM.render(<Drag/>,app)  
```

----

#### 生命周期React



react Component 通过定义了几个函数控制各个阶段的动作



- componentWillMount 组件挂载前（组件渲染前） 属性状态允许使用 找不到元素
- componentDidMount 组件挂载后 （组件渲染后）属性状态允许使用 可以找到元素

- componentWillUpdate 组件更新前  属性状态允许使用 找不到元素
- componentDidUpdate
- componentWillUnmount 组件卸载前  



事件冒泡

阻止冒泡。

- e.cancelBubble = true; 
- e.stopPropagation(); 
- return false;
- e.nativeEvent.cancelBubble = true 

原生事件对象 

- e.nativeEvent.stopImmediatePropagation(); <kbd>立刻停止传播</kbd>



```jsx
class Reno extends React.Component{
		constructor(){
			super();
			this.state ={
				msg:'hello'
			}

		}
		componentWillMount(){


			console.log('挂载前')
		}
		componentDidMount(){
			// console.log(document.querySelector('#div1'))
			// console.log(this.props,this.state)

			console.log('挂载后')
		}

		componentWillUpdate(){

			console.log('更新前',this.props,this.state);
			//debugger;
		}

		componentDidUpdate(){
 			console.log('更新后',this.props,this.state);
 		}

		componentWillUnmount(){
				console.log('卸载');
		}

		show(e){
			this.setState({
				msg:Math.random()
			});
			//e.cancelBubble = true;
			//e.stopPropagation();
			//return false;
			console.log(e.nativeEvent);
			e.nativeEvent.stopImmediatePropagation();
		}
		render(){
			return(
				<div>
					<input type='button' value='点击' onClick={this.show.bind(this)}/>
					<div id='div1'>{this.state.msg}

				</div></div>
			)
		}
	}

	ReactDOM.render(<Reno/>,app);

	document.onclick = function(){
		ReactDOM.render(<h1>asdfa</h1>,app);

	}

```



-----

#### react表单和前后台数据交互

放在form里的就是表单  受控组件/非受控组件  

```html
<input type='text' value='' ref='val1'/>  <!-- value=''受控组件 -->
```

改变成非受控组件，增加默认值

```html
<input type='text' defaultValue='123' ref='val1'/>

<input type='checkbox' checked/> <!--checked导致受控-->
<input type='checkbox' defaultChecked/> <!--checked导致受控-->


```



- angular -$http
- Vue - re....
- react - jquery/zepto/axios/fetch/ajax...

<kbd>虚拟dom每个内容都必须要有自己的唯一标识</kbd>

```shell
npm i express
```



```jsx
const express = require('express');
const server = express();

server.listen(2812);

server.use('/get',(req,res)=>{
  res.send(['china','japan','ruishi'])
})

server.use(express.static('./'))

```



ajax

```jsx
class Frorms extends React.Component {

		constructor(){
			super();
			this.state = {
				// arr:['中国','俄罗斯','巴基斯坦','印度']
				arr:[]
			}
		}

		componentWillMount(){
		   // setTimeout(function(){
				//  this.setState({arr:['china']})
			 // }.bind(this),1000)
			 this.ajaxToData();
		}
		ajaxToData(){
			let oAjax = new XMLHttpRequest();
			oAjax.open('GET','http://localhost:2812/get',true);
			oAjax.send();
			oAjax.onload = function(){
				if(oAjax.status == 200){
					//console.log(oAjax.responseText);
					let json = eval('('+oAjax.responseText+')');
					console.log(json);
					this.setState({
						arr:json
					})
				}
			}.bind(this);
 		}
		render(){
			let arrLi = [];
			this.state.arr.forEach((item, i) => {
				console.log(i,item);
				arrLi.push(<li key={i}>{item}</li>)

			});
			console.log(arrLi);
			return(<div>
				{/* <input type='text' defaultValue='123' ref='val1'/>
				<br/>
				<input type='checkbox' defaultChecked defaultValue='ssh'/> */}
				<div style={{display:this.state.arr.lenght>0?'none':'block'}}>暂时没有数据</div>
				<ul>
					{arrLi}
				</ul>

			</div>)
		}
	}
	ReactDOM.render(<Frorms/>,app);
```

-----

函数调用组件 

{函数名()}

组件：深度重复调用 



组件嵌套 

```jsx
<Child msg={父组件数据}/>

{/*子组件获取父组件 */}
this.props.msg
{/*默认情况下 父组件从新渲染 会统一同步
不想同步就存成state*/}
```

```jsx
class Child extends React.Component{
		constructor(){
			super();
			this.state={
				msg:'我是子组件数据'
			}

		}
		componentWillMount(){
			console.log(this.props);
			this.props.getMsg(this.state.msg);
		}
		render(){
			// return <div style={{color:this.props.textColor}}>我是子组件=>{this.props.setMsg}</div>
			return <div style={{color:this.props.textColor}}>我是子组件=>{this.state.msg}</div>
		}
	}
	class Parent extends React.Component{
		constructor(){
			super();
			this.state={
				msg:''
			}

		}

		show(v){
			console.log(v);
			this.setState({
				msg:v
			});
		}
		render(){
			return (	<div>
					<div >我是父组件=>{this.state.msg}</div>
					<Child textColor={'rgb('+parseInt(Math.random()*256)+',242,232)'}
					getMsg={this.show.bind(this)}/>
					{/*这里的this首先指向的是子组件，不是父组件，bind必须指向会父组件*/}
				</div> )
		}
	}
	ReactDOM.render(<Parent/>,app)
```

```jsx
<Child fn={父组件的一个函数.bind(this)};
子组件里面执行函数
this.props.fn(传入子组件数据)
```

-----

#### tab面板 选项卡

上面的按钮

下面的div

自动选项卡

```json
tabJson={
	topValue:['aaa','bb'],
  bottomValue:['',''],
  timer:2000
}
```

```jsx
<html>
<head>
	<meta charset="utf-8">
	<script type="text/javascript" src='/Users/zbsilent/bower_components/react/react.development.js'></script>
	<script type="text/javascript" src='/Users/zbsilent/bower_components/react/react-dom.development.js'></script>
	<script type="text/javascript" src='/Users/zbsilent/bower_components/babel/browser.js'></script>
<style>
	.myDiv{width:200px;height:200px;border:1px solid black;}
	input.active{background:red}
</style>
</head>
<body>

  <div id='app'></div>
  <script type="text/babel">
	class TopNode extends React.Component{

		show(e){
			this.props.ChildFn(e.target.getAttribute('data-ux'));
		}

		render(){
			// 循环处理
			let oInput = [];
			this.props.topValueArr.forEach((item, i) => {
				oInput.push(<input type='button'
					className={i==this.props.myIndex?'active':''} value={item} key={i} onClick={this.show.bind(this)} data-ux={i}/>)
			});
			return (
				<div>
					<div>{oInput}</div>
				</div>
			)
		}
	}
	class BottomNode extends React.Component{

		render(){
			let oDiv = [];
			this.props.json.bottomValue.forEach((item, i) => {
				oDiv.push(<div className='myDiv' style={{display:i==this.props.myIndex?'block':'none'}} key={i}>{item}</div>)
			});
			return (
				<div>
					<div>{oDiv}</div>
				</div>
			)
		}
	}
	class Tab extends React.Component{
		constructor(){
			super();
			this.state={
				index:0,
				timer:null
			}
		}
		componentDidMount(){
			 this.AutoPaly();
		}
		// 子级控制父级
		change(v){
			console.log(v)
			this.setState({
				index:v
			})
		}
		MouserOverFn(){
			clearInterval(this.timer)
		}
		AutoPaly(){
			clearInterval(this.timer);
			this.timer = setInterval(()=>{
				let index = this.state.index;
				index++;
				index == this.props.tabJson.topValue.length && (index=0)

				this.setState({
					index:index
				})
			},this.props.tabJson.timer)
		}
		MouserOutFn(){
			this.AutoPaly();
		}
		render(){
			console.log(this.props.tabJson);
			return (
				<div onMouseOver={this.MouserOverFn.bind(this)} onMouseOut={this.MouserOutFn.bind(this)}>
					<TopNode topValueArr={this.props.tabJson.topValue} myIndex={this.state.index} ChildFn={this.change.bind(this)}/>
					<BottomNode json={this.props.tabJson} myIndex={this.state.index}/>
				</div>
			)
		}
	}

	ReactDOM.render(<Tab tabJson={{'topValue':['中国','瑞士','新西兰'],'bottomValue':['很强大，最棒','银行不错','黄精不错'],timer:2000}}/>,app);

	</script>
<body>
</html>

```

#### 百度下拉

百度jsonp 搜索



https://www.baidu.com/s?wd=3&rsv_spt=1&rsv_iqid=0xa662e5260004cb29&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=0&rsv_dl=tb&rsv_sug3=1&rsv_sug1=1&rsv_sug7=100&rsv_btype=i&prefixsug=%2526lt%253B&rsp=0&inputT=2784&rsv_sug4=2785

----

#### WebPack配置react项目

- 下载node
- webpack是node的一个包

```shell
npm i webpack-cli -g
cnpm(npm) i(install) webpack -g
cnpm i webpack-dev-server -g 
```

##### 学习

```url
https://webpack.js.org
```





##### webpack组成

- 入口、出口
- loader(加载器，转化器)
- plugin

---

##### 基础配置

需要一个配置文件 webpack.config.js 

配置webpack的具体内容 

```shell
# 切换到目录下
/User/....
touch webpack.config.js 
touch index.js
touch index.html
# 
webpack
 webpack --mode development
 webpack --mode production
#持续监听&打包

webpack -w(watch) 
#压缩打包
webpack -p
#持续监听 压缩打包
webpack -pw
```

创建文件

```js
module.exports = {
  entry:'.index.js', # 入口
  output:{
    filename:'bundle.js'# 出口文件
  }
}
```

```html
<!--引入打包后的文件-->
<script src='bundle.js'/> 
```

```js
index.js
alert(1);
```

<kbd>运行webpack 在webpack.config.js的文件夹下 打包一次</kbd>

##### 对象导入导出

```react
# 自动支持ES6语法
import {a,b} from './' #当前文件目录下
# 支持别名

```

```bash
touch a.js
```

```js
export const a = 12;
export const b = 3;
# 支持别名写法
const a= 12;
const b =12;
export{a as nnum ,b}
```

直接全部导出

```react
import json from '/a.js'

console.log(json.a,json.b)
```

```js
export default{
  a:5,
  b:54
}
```

```js
#导入
import json,{a,b,c} from './a'
console.log(json.a)
console.log(json.b)
console.log(a)
#导出
const a = 10;
const b = 10;
const c = 10;
exprot default{
	a:'hello',
  b:'ttest'
}

```

[webpack组成](#webpack组成)

```js
# loader 认识对象
# webpack 指着对本身，必须用加载器 转换器
require('./index.css')
```

```bash
npm init -y
#下载模块
npm install style-loader -D
npm install css-loader -D
```



```json
{
  "name": "react-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "style-loader": "^2.0.0"
  }
}
```

```json
module.exports = {
  mode: 'development',
  entry:'./index.js',
  output:{
    filename:'bundle.js'
  },
  module:{
    rules:[{
      #正则表达
      test:/\.css$/,
      #这里注意不可以加载反了 从右往左
      use:['style-loader','css-loader']
    }
    ]
  }
}

```

---

[![](https://img.shields.io/badge/zbsilent-yonyou-red)](Https://github.com/zbsilent)

##### React-JSX在webpack中的支持

`babel-core`

`babel-loader`

`babel-preset-es2015`

```bash
# 配置bable
npm install babel-core babel-loader@7.1.5 babel-preset-es2015 -D
# -D是为了加入到配置文件中
```



![image-20210319185818217](https://raw.githubusercontent.com/zbsilent/imag/main/rootimage-20210319185818217.png)

配置文件

```json
module.exports = {
  mode: 'development',
  entry:'./index.js',
  output:{
    filename:'bundle.js'
  },
  module:{
    rules:[{
      test:/\.css$/,
      use:['style-loader','css-loader']
    },
    {
      test:/\.js$/,
      use:['babel-loader']
    }
  ]
  }
}

```



##### 预设 .babelrc 新建这个文件

```json
{
  presets:[['es2015'],['reacct']]
}

```

##### 配置react

```react
cnpm install react
cnpm install react-dom -D
babel-preset-react
cnpm install react-hot-loader@1.3.1 -D
```


