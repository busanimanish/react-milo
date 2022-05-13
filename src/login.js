import React from 'react';
import './login.css';
import Img from './download.jpg';
import Bell from './bell.png';
import Con from './call.jpeg';
import {useNavigate} from "react-router-dom"
function Login() {
    const navigate=useNavigate();
    const handleSubmit=(k)=>{
        k.preventDefault();
      navigate("/agency");
    }
    return (
        <>
         <div className='navbar mt-4 mx-5'>
             <div className='void'>
                 <img src={Img} alt='img'></img>
              <p className='text-primary'><b>MiloLive</b></p>
             </div>
             <div className='void1'>
             <p className='text-primary'>+1 999 999 999</p>
             <img src={Bell} alt='ring'></img>
             <p className='en'>Eng</p>
             </div>
         </div>
        <div className='container'>
            <div className='main'>
            <div className='row mt-5'>
                <div className='col-lg-5 col-md-8 col-sm-12'>
                <h1 className='text-info text-center mb-4'>Agency Login</h1>
                <form className='px-4 ' onSubmit={handleSubmit}>
                    <div className='form mb-3 mt-2'>
                        <label className='mb-2'>Email:</label>
                        <input type='email' placeholder='Email' className='form-control'></input>
                    </div>
                    <div className='form'>
                    <label className='mb-2'>Password:</label>
                        <input type='password' placeholder='Password' className='form-control'></input>
                    </div>
                    <div className='mt-3 mb-3'>
                    <a href='#' className='text-info'>Forgot Password?</a><br></br>
                    </div>
                    <input type='checkbox'></input>
                    <label> By signing in, you agree to our <a href='#' className='text-info'> terms and conditions</a> </label>
                    <br></br>
                    <div className='bt'>
                    <button className='bt1 mt-2 mb-2'>Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </div>
    </>


    );
}

export default Login
