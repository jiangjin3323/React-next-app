import axios from "./axios";

export const getBannerListApi = (data: any = {}) => axios.get(`banner`, { data });
export const getheaderListApi = (data: any = {}) => axios.get(`header`, { data });
