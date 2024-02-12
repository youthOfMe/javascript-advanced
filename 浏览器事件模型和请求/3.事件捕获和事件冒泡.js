// 事件捕获

<html>
    <body>
        <div>
            niuma
        </div>
    </body>
</html>

// 1. 事件捕获
// 2. 事件执行
// 3. 事件冒泡

stopPropagation // 阻止事件冒泡
preventDefault // 阻止默认事件的执行

// list的捕获
$list.addEventListener('click', (e) => {
    console.log('1')
    // e.stopPropagation() 两个事件都会执行
    // e.stopImmediatePropagation() 立马阻止事件冒泡 只执行1事件
}, true)

// list的捕获 2
$list.addEventListener('click', (e) => {
    console.log('2')
}, true)