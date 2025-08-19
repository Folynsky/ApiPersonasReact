import api from "./axiosConfig";

export const getUsers = async () => {
    const { data } = await api.get('/personas');
    return data;
}

export const createUser = async (persona) =>{
    const { data } = await api.post('/personas', persona);
    return data;
}