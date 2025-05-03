import axiosConfig from "../axios";

export const GetInvoiceNo = () => {
    return axiosConfig.get(`common/invoice`);
};

export const GetDropdown = (params) => {
    return axiosConfig.get(`dropdown`,{ params });
};

export const GetCustomer = (id) => {
    return axiosConfig.get(`common/customer/${id}`);
};
