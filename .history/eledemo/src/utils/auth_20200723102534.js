import Cookies from 'js-cookie'


var olddata;
export function getToken() {
    return Cookies.get('token')
   
}
function countTime() {
    //获取当前时间  
    var date = new Date();
    //当前时间转时间戳
    var now = date.getTime();
    //设置截止时间  本地存储 或者 cookies
    var endDate = now + 1;
    //时间差  对比 本地存储时间减去当前时间 小于0清空token重新登录
    var leftTime = endDate - now;
    if (leftTime < 0) {
        //小于0清空token
        removeToken()
    }
}
export function setToken(token) {
    countTime()
    return Cookies.set('token', token)

    
}

export function removeToken() {
    return Cookies.remove('token')

}


