import apiClient from "../helpers/axios";

const distributorId = '3935e4c3-03c4-4331-9c8f-49c61a45fdd9'

export const fetchDistributors = async () =>{
    return (await apiClient.get('distributors')).data
}

export const createDistributor = async (distributor) =>{
    return (await apiClient.post('distributors', distributor)).data
}

export const fetchUniqueDistributor = async () =>{
    return (await apiClient.get(`distributors/${distributorId}`)).data
}

export const updateDistributor = async () =>{
    return (await apiClient.put(`distributors/${distributorId}`)).data
}

export const deleteDistributor = async () =>{
    return (await apiClient.delete(`distributors/${distributorId}`)).data
}