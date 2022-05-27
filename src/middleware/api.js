import axios from "axios"

const Axios = () => {
    const instance = axios.create({
        baseURL: "https://api.themoviedb.org/3",
        timeout: 10000
    })
    // instance.interceptors.request.use(request => {
    //     console.log('Starting Request', JSON.stringify(request, null, 2))
    //     return request
    //   })
    // instance.interceptors.response.use(request => {
    //     console.log('Starting Request', JSON.stringify(request, null, 2))
    //     return request
    //   })
    return instance;
}


const execString = (str) => {
    return str.replace((matches) => matches[1].toUpperCase());
};

// Api key v3:
// 98aeb8d6fda606124fb4e8c65635c825

class Api {
    _crudMethod = {};
    _api_key = "98aeb8d6fda606124fb4e8c65635c825";
    
    createEntities(arrayOfEntity=[]){
        const multipleEndpoints = arrayOfEntity.join("/");
        // console.log("multipleEndpoints", multipleEndpoints);
        this._crudMethod = this._createCRUDEnpoints(`/${multipleEndpoints}`);
    }

    _createCRUDEnpoints(endpoint){
        let crud = {}
        crud.getAll = (config = {...config, params: {}}) => Axios().get(endpoint, {...config, params: {...config.params, api_key: this._api_key}});
        return crud;
    } 
}

const Setup = new Api();
export default Setup;