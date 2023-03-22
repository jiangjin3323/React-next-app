import axios from "./axios";

export const getBannerListApi = (data:any) => axios.post(`banner`, { data });
