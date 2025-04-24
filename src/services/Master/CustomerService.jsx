import axiosConfig from "../axios";
export const GetPagination = (params) => {
    return axiosConfig.get(`customer`, { params });
};
export const GetCustomer = (id) => {
    return axiosConfig.get(`customer/${id}`);
};
export const DeleteCustomer= (id) => {
    return axiosConfig.delete(`customer/${id}`);
};
export const SaveCustomer = (params) => {
    return axiosConfig.post(`customer`,params);
};
export const UpdateCustomer = (id,params) => {
    return axiosConfig.put(`customer/${id}`,params);
};