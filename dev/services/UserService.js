import BaseService from "./BaseService";
import * as axios from "axios";


export default class UserService extends BaseService {
    get className() {
        return "user";
    }

    register(user) {
        return axios.post("register", user).then(
            (response) => {
                return response.data;
            }
        );
    }

    login(user) {
        console.log(user)
        return axios.post("mylogin", user).then(
            (response) => {
                console.log(response)
                return response
            }
        )
    }

    logout() {
        return axios.get("logout").then(
            (response) => {
                return response
            }
        )
    }

    getConnectUser() {
        return axios.get("getuserlogin").then(response => {
            if (response.data == '') return null
            return response.data
        })
    }


};