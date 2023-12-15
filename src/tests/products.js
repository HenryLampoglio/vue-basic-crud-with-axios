import apiClient from "../helpers/axios";
const productId = '1f5e8a08-a27e-47f8-af59-684b1fde7cbd'

export const fetchProducts = async () =>{
    return (await apiClient.get(`products`)).data
}

export const createProduct = async (product) =>{
    return (await apiClient.post(`products`, product)).data
}

export const fetchUniqueProduct = async () =>{
    return (await apiClient.get(`products/${productId}`)).data
}

export const updateProduct = async () =>{
    return (await apiClient.put(`products/${productId}`,)).data
}

export const deleteProduct = async () =>{
    return (await apiClient.delete(`products/${productId}`)).data
}