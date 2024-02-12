// 这一快内容可以去Fusion中仔细研究
export default function upload(option) {
    const xhr = new XMLHttpRequest()

    if (option.onProgress && xhr.upload) {
        xhr.upload.onprogress = function progress(e) {
            if (e.total > 0) {
                e.percent = (e.loaded / e.total) * 100
            }
            option.onProgress(e)
        }
    }

    const formData = new FormData()

    if (option.data) {
        Object.keys(option.data).forEach(key => {
            formData.append(key, upload.data[key])
        })
    }

    xhr.onload = function onload() {
        if (xhr.status < 200 || xhr.status >= 300) {
            return option.onerror()
            throw new Error("请求失败")
        }
    }

    xhr.onerror = function error(e) {
        option.onerror(e)
    }
}