import Cookies from 'js-cookie'


var olddata;
export function getToken() {
    return Cookies.get('token')
}

export function setToken(token) {
    return Cookies.set('token', token)
}

export function removeToken() {
    return Cookies.remove('token')

}
// 实现时间戳清楚token
let olddata 