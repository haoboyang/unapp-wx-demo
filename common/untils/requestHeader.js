import Vue from 'vue';

const baseUrl = Vue.prototype.$serverUrl
const TOKEN_NAME = Vue.prototype.$TOKEN_NAME;
const HttpHeder = {}

const UNAUTH_POST = (url, data) => {
    console.log('this is login data = ', data)
    uni.request({
        url: `${baseUrl}${url}`,
        method: 'POST',
        header: {
            'content-type': 'application/json'
        },
        data: data,
    }).then((res)=>{
        console.log(JSON.stringify(res))
    })
    
}

const AUTH_POST = (url, data) => {
    console.log('this is login data = ', data)
    return uni.request({
        url: `${baseUrl}${url}`,
        method: 'POST',
        header: {
            'content-type': 'application/json',
            TOKEN_NAME: getToken()
        },
        data: data
    })
}

function getToken() {
    const token = uni.getStorageSync(Vue.prototype.$TOKEN_NAME);
    if (token) {
        return token;
    }
    backToHome();
}

function backToHome() {
    uni.navigateTo({
        url: '/pages/index/index.vue',
        success: res => {},
        fail: res => {
            console.log('fail =' + JSON.stringify(res))
        },
        complete: res => {

        }
    });
}

HttpHeder.UNAUTH_POST = UNAUTH_POST
HttpHeder.AUTH_POST = AUTH_POST

export default HttpHeder
