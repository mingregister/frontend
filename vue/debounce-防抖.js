
// import debounce from 'lodash/debounce';
// 其实你可以直接导入上面的函数使用
methods: {
    debounce(func, delay) {
        let timer = null
        return function (...args) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                func.apply(this, args)
            }, delay)
        }
    }
}