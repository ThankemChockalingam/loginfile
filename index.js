import React from 'react'
import ReactDOM from 'react-dom';
class Login extends React.Component{
render(){
  return (
    <div class = "row">
      <div class="col-md-8 offset-md-2">
        <form>
          <div class="form-group">
            <h1 style={{color:"Blue", textAlign:"center"}}> Login</h1>
            <label class="skills" for="subject">
              Username
              </label>
              <input
                type="text"
                id="Username"
                class="form-control"
                required 
              />
          </div>
          <div>
            <label class="skills" for="Body">
              Password
            </label>
            <input type="password" id="pwd" required class="form-control"/>
            <br/>
          </div>
          <input
            type="submit"
            value="Login"
            id="navigation"
            class="button btm-primary"
            />
        </form>
      </div>
    </div>
  );
}
}
ReactDOM.render(<Login/>, document.getelementById('root'));