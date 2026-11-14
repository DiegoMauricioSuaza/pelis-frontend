import { axiosInstance } from "../helper/axios-config";

const getProductoras = () => {
    return axiosInstance.get('productora', {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

const crearProductora = (data) => {
    return axiosInstance.post('productora', data, {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

const actualizarProductora = (productoraId, data) => {
    return axiosInstance.put(`productora/${productoraId}`, data, {
        header: {
            'Content-Type': 'application/json'
        }
    });
}

export {
    getProductoras, crearProductora, actualizarProductora
}