
import{loginUser} from '../lib/auth'
import React from 'react';
class LoginForm extends React.Component {
    
  state ={
    username:'',
    password:''
  }
  handleChange = event=>{
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = event=>{
   console.log(username,password)
    loginUser(username,password)
  }
    render() {
        return (
          
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text"
                        name="username"
                        placeholder="username" 
                        onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="password"
                        name="password" 
                        placeholder="password"
                        onChange={this.handleChange}/>
                </div>
                <button type="submit">Submit</button>
                
            </form>

            )
    }
}
export default LoginForm