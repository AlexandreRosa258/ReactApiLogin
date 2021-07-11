import React,{Component} from 'react';
import Signup from "./components/signUp/Signup";
import Signin from "./components/SignIn/Signin";
import Home from "./components/Home/Home";
import './App.css';

import { BrowserRouter,NavLink,Route } from 'react-router-dom';
 class App extends Component {

  render(){

    let navLink = (
      <div className="Tab">
        <NavLink to="/sign-in" activeClassName="activeLink" className="signIn">
          Sign In
        </NavLink>
        <NavLink exact to="/" activeClassName="activeLink" className="signUp">
          Sign Up
        </NavLink>
      </div>
    );

    const login = localStorage.getItem("isLoggedIn");
    return(
     <div className="App">

       {login?(
          <BrowserRouter>
            <Route exact path="/" component={Signup}></Route>
            <Route path="/sign-in" component={Signin}></Route>
            <Route path="/home" component={Home}></Route>
          </BrowserRouter>
       ):(
         
        <BrowserRouter>
          {navLink}
         <Route exact path="/" component={Signup}></Route>
         <Route path="/sign-in" component={Signin}></Route>
         <Route path="/home" component={Home}></Route>

        </BrowserRouter>
       )

       }    
    </div>
    )
  }
}
export default App;
