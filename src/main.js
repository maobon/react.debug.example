/**
 * Created by xinbob on 4/22/17.
 */

import React from "react";
import ReactDOM from "react-dom";
// 引自己写的组件
import MyComponent from "./MyComponent";


ReactDOM.render(
// <div></div>
// 可以把Btn以标签的形式写在这里，单双标签都可以，*注意闭合*
<MyComponent></MyComponent>,
    // 最终 Btn这个组件里的 render中return 的div就会被插入到这个box中
    document.getElementById('box')
);