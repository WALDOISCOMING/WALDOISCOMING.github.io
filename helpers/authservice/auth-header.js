import Cookies from 'js-cookie'

export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(Cookies.get('user'));
    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}
