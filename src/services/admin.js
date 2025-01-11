import api from "../configs/api";

const getCategories=()=>api.get('category');
 
const addCategory = (data)=>api.post('category' , data);

export {getCategories , addCategory}