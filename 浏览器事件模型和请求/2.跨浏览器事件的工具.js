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
    }
}

export default EventUtils