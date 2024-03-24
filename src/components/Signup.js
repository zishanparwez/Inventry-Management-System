import { _registerUser } from '../network/auth';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [signUpForm, setSignUpForm] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const registerUser = async () => {
        await _registerUser(signUpForm).then((res) => {
            if(res.data.status===201) {
                navigate("/login");
            }
        })
    }



    return (
        <>
        <div className='signup-form-con'>
            <h3>Sign Up Form</h3>
            <div className='input-field-con'>
            <input className='input-field' type="text" placeholder='Enter User Name' value={signUpForm.name} onChange={(e) => {setSignUpForm((prevState) => { return {...prevState, name: e.target.value}})}}></input>
            </div>
            <div className='input-field-con'>
            <input className='input-field' type="text" placeholder='Enter User Email' value={signUpForm.email} onChange={(e) => {setSignUpForm((prevState) => { return {...prevState, email: e.target.value}})}}></input>
            </div>
            <div className='input-field-con'>
            <input className='input-field' type="password" placeholder='Enter User Password' value={signUpForm.password} onChange={(e) => {setSignUpForm((prevState) => { return {...prevState, password: e.target.value}})}}></input>
            </div>
            <input className="normal-btn" type="button" value="Sign Up" onClick={registerUser}/>
        </div>
        </>
    )
}

export default Signup;