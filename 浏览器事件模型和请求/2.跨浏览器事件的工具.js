const EventUtils = {
    addHandler: (element, type, handler) => {
        if (element.addEventListener) {
            element.addEventListener(type, handler) // 'click'
        } else if (element.attachEvent) {
            element.attachEvent(type, handler)
        } else {
            element[`on${type}`] = handler
        }
    },

    removeHandler: (element, type, handler) => {
        if (element.addEventListener) {
            element.removeEventListener(type, handler) // 'click'
        } else if (element.attachEvent) {
            element.derachEvent(type, handler)
        } else {
            element[`on${type}`] = null
        }
    },

    // 实现 - stopPropagation --> IE 中为 cancelBubble
    // 实现 - prenventDefault --> IE 中为 returnValue

    getEvent: (event) => {
        return event ?? window.event;
    },

    // 获取当前执行事件的目标元素
    getTarget: (event) => {
        return event.target ?? event.srcElement
    },

    // 阻止默认行为
    preventDefalt: (event) => {
        if (event.preventDefalt) {
            event.preventDefalt()
        } else {
            event.returnValue = true
        }
    },

    // 停止事件传递
    stopPropagation: (event) => {
        if (event.stopPropagation) {
            event.stopPropagation()
        } else {
            event.cancelBubble = true
        }
    }
}

export default EventUtils