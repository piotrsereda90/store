import axios from 'axios';


const axiosInstance = axios.create({
  baseUrl:'',
  headers:{
    'Content-Type':'application/json',
  },
  responseType:'json',
    // withCredentials: true // cookies Httonlny
});

const api = {
   login(email, password){
    return  axiosInstance.post('/login', {email, password});
  },
  me(){
    return axiosInstance.get('/me');
  },
  logout(){
    return axiosInstance.post('./logout');
  }
}
export default api;