import { _loginUser } from "../network/auth";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ApplicationCtx } from "../context/ApplicationCtx";

const Login = () => {

    const [loginUserForm, setLoginUserForm] = useState({
        email: '',
        password: ''
    });
    const { setIsUserLoggedIn} = useContext(ApplicationCtx)
    const navigate = useNavigate();

    const loginUser = async () => {
        await _loginUser(loginUserForm).then((res) => {
            if(res.status===200) {
                localStorage.setItem("_token", res.data.data.token)
                setIsUserLoggedIn(true)
                navigate("/");
            }
        })
    }
    return (
        <>
        <div className='signup-form-con'>
            <h3>Login Form</h3>
            <div className='input-field-con'>
            <input className='input-field' type="text" placeholder='Enter User Email' value={loginUserForm.email} onChange={(e) => {setLoginUserForm((prevState) => { return {...prevState, email: e.target.value}})}}></input>
            </div>
            <div className='input-field-con'>
            <input className='input-field' type="password" placeholder='Enter User Password' value={loginUserForm.password} onChange={(e) => {setLoginUserForm((prevState) => { return {...prevState, password: e.target.value}})}}></input>
            </div>
            <div className='input-field-con'>
            <input className="normal-btn" type="button" value="Log In" onClick={loginUser}/>
            </div>
        </div>
        </>
    )
}

export default Login;