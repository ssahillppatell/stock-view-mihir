// Api service via axios

import axios from 'axios';

const errorHandler = async (promise) => {
    try {
        const response = await promise;
        return {
            response,
            error: null,
        };
    } catch (error) {
        return {
            response: null,
            error,
        }
    }
}

const apiService = {
    init: (baseUrl) => {
        axios.defaults.baseURL = baseUrl;
    },

    get: (url, config) => {
        return errorHandler(axios.get(url, config));
    },

    post: (url, data, config) => {
        return errorHandler(axios.post(url, data, config));
    },

    put: (url, data, config) => {
        return errorHandler(axios.put(url, data, config));
    },

    delete: (url, config) => {
        return errorHandler(axios.delete(url, config));
    }
}

export default apiService;