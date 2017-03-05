import * as axios from "axios";
/**
 * Created by elad on 20 נובמבר 2016.
 */


export default class BaseService {

    create(data) {
        return axios.post(this.className, data).then(
            (response) => {
                return response.data;
            }
        );
    }

    update(data, id) {
        return axios.put(this.className + '/' + id, data).then(
            (response) => {
                return response.data;
            }
        );
    }

    fetch(params = {}) {
        return axios.get(this.className, {params}).then(
            (response) => {
                return response.data;
            }
        );
    }

    get(id, params = {}) {
        // params.id = id;
        return axios.get(this.className + '/' + id).then(
            response => {
                if (response.data) {
                    return response.data;
                } else {
                    throw new Error(response.data);
                }

            }
        );
    }

    remove(id, dataUrl = {}) {
        return axios.delete(this.className + '/' + id, dataUrl).then(
            response => {
                if (response.data) {
                    return response.data;
                } else {
                    throw new Error(response.data);
                }

            }
        );
    }


    _errorFunction() {

    }

    get className() {
        return null;
    }

    _getUrl(fun, id = null) {
        let url = this.className;
        if (id) {
            url += `&id=${id}`;
        }
        return url;
    }

    static removeFromArry(arr, obj) {
        let index = arr.indexOf(obj);
        if (index > -1) {
            arr.splice(index, 1);
            return true;
        }
        return false;
    }

    static UpdateArray(arr, obj) {
        let index = arr.indexOf(obj);
        if (index > -1) {
            arr[index] = obj;
            return true;
        }
        return false;
    }
};