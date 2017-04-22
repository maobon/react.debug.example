// 这是我们的第一个React组件
// 1.引包
import React from "react"; // require('')

// 2.定义组件
// 定义组件时必需继承自 React.Component ,这个 React.Component 也是一个构建函数


// 组件包含： html,css,js
class MyComponent extends React.Component {
    constructor() {
        super(); // super就相当 new React.Component
    }

    // 这里必需写一个方法,这个方法名叫render
    // React内部会得到Btn的实例,然后调用它的 render()
    // render中return 的内容最终会被插入到html中
    render() {
        // 这个render里必需return一个 标签
        return (
            // 这里必需用一个标签把别的标签包裹
            <div>
                <input type="button" value="Button"/>
                <br/><br/>
                <input type="text"/>
                <br/><br/>
                <input type="button" value="按钮"/>
            </div>
        )
    }
}

// 如果想让别的文件用这个组件,就必需 暴露出去
// module.exports = MyComponent
export default MyComponent