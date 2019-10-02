import axios from 'axios';

const DEFAULT_USER = {id: 'u1', email: 'test@example.net', name: 'Mario Rossi'};
let currentUser = DEFAULT_USER;

export const authMe = async () => {
    if (!currentUser) {
        throw new Error('401 error...');
    }
    return {
        data: currentUser,
    };
}
export const authLogout = async () => {
    currentUser = null;
};
export const authLogin = async (username, password) => {
    currentUser = null;
    if (username === 'test@example.net' && password === 'pass') {
        currentUser = DEFAULT_USER;
        return {data: currentUser};
    } else {
        throw new Error('401 error...');
    }
};

export const userList = () => axios.get('http://dummy.restapiexample.com/api/v1/employees');
export const userDetail = (id) => axios.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`);
