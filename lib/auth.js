import axios from "axios"

export const loginUser = async (userneame,passwor)=> {
    const {data}= await axios.post('/api/login',{username,password })
    console.log(data);
} 