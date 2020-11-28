import axios from 'axios';

export function request1 (config) {
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:18080',
        timeout: 5000
    })

    instance(config)
        .then(res => { config.success(res); })
        .catch(res => { config.failure(res); })


}

export function request2 () {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: 'http://127.0.0.1:18080',
            timeout: 5000
        })

        instance(config)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}


export function request3 () {
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:18080',
        timeout: 5000
    })

    instance.interceptors.request.use(config => {
        console.log(config);
        return config
    }, err => {
        console.log(err);
        return Promise.reject(err);
    });

    instance.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;  // 数据都在response.data里面
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    return instance(config)
}


