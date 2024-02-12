/*
    浏览器请求
        ajax
        fetch
        axios
*/

/*
    ajax
    async js and xml 技术的统称 并不具体指代某个技术 是一个思维
    XMLHttpRequest 原生提供的模拟浏览器请求的方法

    readyState

    0: 还未创建请求
    1: 跟服务器创建好连接 但是没有传输数据
    2: 请求处理中
    3: 部分请求可以接收到
    4: success
*/

/*
    fetch
    基于promise封装的一个ajax的实现 es6中封装的实现 替代XMLHttpRequest
    支持链式调用
*/

/*
    axios 就是一个请求库
    host 宿主环境

    封装好了浏览器和node的请求实现
    浏览器: promise 请求实现
    node: require('http)
*/