import axios from 'axios';


const axiosInstance=axios.create({
    baseURL:'http://localhost:3000'

});
axiosInstance.defaults.timeout = 2500;


export {axiosInstance as axios };
