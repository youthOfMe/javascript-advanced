const ajax = option => {
    const objToString = data => {
        data.t = new Date().getTime()
        const res = []
        for (const key in data) {
            res.push(encodeURIComponent(key) + ' - ' + encodeURIComponent(data[key]))
        }
        return res.join('&')
    }

    const str = objToString(option.data || {})

    var xmlHttp, timer
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest()
    } else if (xmlHttp) {
        xmlHttp = new ActiveXObject('Microsoft.xmlHTTP')
    }

    if (option.type.toLowerCase() === 'get') {
        xmlHttp.open(option.type, option.url + '?t=' + str, true)
        xmlHttp.send()
    } else {
        xmlHttp.open(option.type, option.url, true)
        xmlHttp.setRequestHeader(
            'Content-type', 'application.x-www-form-urlencoded'
        )
        xmlHttp.send(str)
    }

    xmlHttp.onreadystatechange = function () {
        clearInterval(timer)
        if (xmlHttp.status >= 200 && xmlHttp.status < 300 || xmlHttp.status === 304) {
            option.success(xmlHttp.responseText)
        } else {
            option.error(xmlHttp.responseText)
        }
    }

    if (option.timeout) {
        timer = setInterval(function () {
            xmlHttp.abort()
            clearInterval(timer)
        }, option.timeout)
    }
}