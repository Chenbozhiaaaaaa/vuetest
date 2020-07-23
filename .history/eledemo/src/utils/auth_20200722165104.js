import Cookies from 'js-cookie'



export function getToken() {
    return Cookies.get('token')
}

export function setToken(tcuncuoken) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)

}