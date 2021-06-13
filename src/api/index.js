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
  logout(){
    return axiosInstance.post('/logout');
  },
  products(){
    return axiosInstance.get('/products');
  },
  categories(){
    return axiosInstance.get('/categories');
  },
  orders(order){
    return axiosInstance.post('/orders',{order});
  },
  recommendedProducts(){
    return axiosInstance.get('/recommendedProducts');
  },
  deleteProduct(id){
    return axiosInstance.delete('/deleteProduct',{id});
  },
  updateProduct({product}){
    return axiosInstance.patch('/updateProduct',{product})
  },
  addProduct({product}){
    return axiosInstance.post('/addProduct',{product})
  }
}
export default api;