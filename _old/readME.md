回学校一趟，买了本书[《ES6 标准入门》](http://es6.ruanyifeng.com/)来啃，然后就想试试用ES6来写写页面。
本来之前用Angular写了几个页面，既然要试试ES6，索性就全部换成ES6+React的写法。

### 前期准备

由于ES6是作为一个新的标准公布出来，现阶段各大浏览器对它的支持各不相同，但Node对ES6的支持比浏览器要高。我们可以借助转换器，来把我们编写的ES6代码转换成兼容主流浏览器的ES5语法，比如很流行的转码器Babel。所以简单概括下，要想尝试ES6语法，需要准备以下几个步骤：

*   安装nodejs环境 

  下载与安装： [nodejs官网](http://nodejs.org)

  安装完之后，在命令行确认node、npm有没有配置到环境变量

  ```shell
  node -v & npm -v
  ```

*   使用npm全局安装babel跟webpack

  ```shell
  npm install -g babel-cli babel-core webpack
  ```

### 运行项目

*   新建babel配置
  
  在根目录下，新建一个babel转码器的配置文件.babelrc
  ```json
  {
    "presets": [
      "es2015",
      "react"
    ],
    "plugins": []
  }
  ```

*   安装依赖：
  ```shell
  npm install
  ```

*   运行项目：
  ```shell
  npm start
  ```

*   新建一个ES6的Class

  使用ES6的模块引入react、react－dom，并新建一个继承React.Component的类
  ```javascript
  import React from 'react';
  import ReactDOM from 'react-dom';

  class HelloBox from React.Component{
    render(){
      return(
        <div>Hello ES6!</div>
      );
    }
  }
  ```
