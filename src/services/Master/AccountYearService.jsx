import axiosConfig from "../axios";
export const GetPagination = (params) => {
    return axiosConfig.get(`accountYear`, { params });
};
export const GetAccountYear = (id) => {
    return axiosConfig.get(`accountYear/${id}`);
};
export const DeleteAccountYear= (id) => {
    return axiosConfig.delete(`accountYear/${id}`);
};
export const SaveAccountYear = (params) => {
    return axiosConfig.post(`accountYear`,params);
};