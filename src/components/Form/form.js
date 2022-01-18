import { useState } from "react";
import classes from "./form.module.css";
import Card from "../UI/Card";
import axios from "axios";

const Form = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordIsVaid, setPasswordIsValid] = useState(true);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const switchHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      setEmailIsValid(false);
      return;
    }
    if (password.trim() === "") {
      setPasswordIsValid(false);
      return;
    }

    setEmailIsValid(true);
    setPasswordIsValid(true);

    // const data = {
    //   email,
    //   password,
    // };

     let url;

     if(isLogin) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCI6khKbzl59G5x5JnMjMfiuBe2-AIoKqc';
        axios.post(url, {
          email: email,
          password: password,
          returnSecureToken: true,
        })
        .then((res) => {
           console.log(res.data)
           
        })
        .catch((err) => {
          alert("Authentical failed");
          console.log(err.message);
        })
     } 
     else {
      url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCI6khKbzl59G5x5JnMjMfiuBe2-AIoKqc";
      axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      }).then((res) => {
        console.log(res);
        console.log('user signed up successfully');
      })
     }
  };

  return (
    <Card className={classes.input}>
      <h1>{isLogin ? "Login" : "sign-up"}</h1>
      <form onSubmit={SubmitHandler}>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            className={classes.control}
            type="email"
            id="email"
            onChange={emailHandler}
            
          />
          {!emailIsValid && <p className={classes.text}>Email is required.</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className={classes.control}
            type="password"
            id="password"
            onChange={passwordHandler}
            
          />
          {!passwordIsVaid && (
            <p className={classes.text}>Password is required.</p>
          )}
        </div>

        <div className={classes.toggle}>
          {<button>{isLogin ? "Login" : "Create Account"}</button>}
          

          <button
            type="button"
            className={classes.actions}
            onClick={switchHandler}
          >
            {isLogin ? "create new account" : "already have an account"}
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
