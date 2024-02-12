// 事件委托

<ul id="myLinks">
    <li id="goSomewhere">Go somewhere</li>
    <li id="doSomething">Do something</li>
    <li id="sayHi">Say hi</li>
</ul>

import EventUtils from "./2.跨浏览器事件的工具"

const list = documnet.getElementById('myLinks')
EventUtils.addHandler(list, 'click', function(event) {
    const event = EventUtils.getEvent(event)
    const target = EventUtils.getTarget(event)

    switch (target.id) {
        case 'goSomewhere':
            //xxx
        case 'doSomething':
            //xxx
    }
})