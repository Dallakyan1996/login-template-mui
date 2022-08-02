import { BehaviorSubject } from 'rxjs';
// import { history } from './../helpers/history';
// import { handleResponse } from '../Components/helpers/hendle-response';
import { loginTokenStorage } from '../Utils/constants';
import { history } from '../Components/helpers/history';
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem(loginTokenStorage)));

export const apiService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { return currentUserSubject.value }
};

function login(email, password) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ email, password }),
    };

    return fetch(process.env.REACT_APP_LOGIN_API, requestOptions)
        // .then(handleResponse)
        .then(user => {
            user.json().then(data => {
                localStorage.setItem(loginTokenStorage, JSON.stringify(data));
                currentUserSubject.next(data);
            });
            return user;
        });
}

function logout() {
    localStorage.removeItem(loginTokenStorage);
    currentUserSubject.next(null);
    const { from } = { from: { pathname: "/login" } };
    history.push(from);
}