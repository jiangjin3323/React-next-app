import axios from "./axios";

export const getBannerListApi = (data: any = {}) => axios.get(`banner`, { data });
export const getheaderListApi = (data: any = {}) => axios.get(`header`, { data });
export const getProductListApi = (data: any = {}) => axios.get(`product`, { params:data });
