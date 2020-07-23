import Cookies from 'js-cookie'


var olddata;
export function getToken() {
    return Cookies.get('token')
    olddata = new Date().getTime()
}

export function setToken(token) {
    return Cookies.set('token', token)
}

export function removeToken() {
    return Cookies.remove('token')

}

var endDate = new Date().getTime();
//时间差  对比 本地存储时间减去当前时间 小于0清空token重新登录
var leftTime = endDate - olddata;
if (leftTime > 2) {
    removeToken()
}