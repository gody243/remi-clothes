import axios from "axios"
import register from "../pages/posts/register";

const loginUser = ()=> {
     axios.post('/post/register',
     {username:register.username,
     password:register.password, })
    .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
} 