import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    
    //1. make an axios post call to localhost:5001/api/login. Make sure that we pass in our credentials.
    //2. if the call is successful, save the token returned to localStorage
    //3. if the call fails console.log the error.
    axios.post(`http://localhost:9000/api/login`, this.state.credentials)
      .then(resp=> {
        console.log(resp);
        
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("role", resp.data.role);
        localStorage.setItem("username", resp.data.username);
        // this.props.history.push('/protected');
      })
      .catch(err=> {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <label htmlFor='username'>Username</label>
          <br />
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='password'>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;