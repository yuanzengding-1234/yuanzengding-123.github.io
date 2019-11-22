import axios from "axios"
axios.defaults.baseURL="../../static/";
axios.interceptors.response.use((a)=>{
  return a.data;
})
export let a1=function () {
    return axios.get('hotlist.json');
}
export let a21=function () {
    return axios.get('banner.json');
}
