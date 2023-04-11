import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineApple } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";


const SignUp = () => {
const nav=useNavigate();
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [fun,setFun] = useState('')
const [password,setPassword] = useState('')

const s=new Date();
const date=s.getFullYear()+"/"+s.getMonth()+"/"+s.getDate();
console.log(date);
function saveData(){
    let data = {name,email,fun,password,date}
    fetch('http://localhost:5000/users',{
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    nav('/SignIn')
    setName('')
    setEmail('')
    setPassword('')
}
    return (
        <div>
           <div className='row'>
            <div className='col-sm-7 p'>
                <p className=' display-5 text-center'>INSPIRED BY THE FUTURE:</p>
                <h4 className='text-center text-light h2 '>THE VISION UI DASHBOARD</h4>
            </div>
            <div className='col-sm-3 px-5 in'><br/>
                <h3 className='text-center h2' >Welcome!</h3>
                <p className='text-center h6'>Use these awesome forms create new <br/> account in your project for free.</p>
                <div>
                    <p className='text-center h3' >REGISTER <span style={{"color":"#fdb0ff"}}>WITH</span></p>
                    <GrFacebookOption className='icon'/>
                    <AiOutlineGoogle className='icon'/>
                    <AiOutlineApple className='icon'/>
                    <p className='text-center'>or</p>
                    <from>
                    <label>Name</label><br/>
                    <input type="text" placeholder='Your name...' value={name} onChange={(e)=>setName(e.target.value)} className=' bg-dark text-light form-control'/><br/>
                    <label>Gmail</label><br/>
                    <input type="email" placeholder='Your email...' value={email} onChange={(e)=>setEmail(e.target.value)} className='bg-dark text-light  form-control'/><br/>
                    <label>Function</label><br/>
                    <input type="text" placeholder='Your function...' value={fun} onChange={(e)=>setFun(e.target.value)} className='bg-dark text-light  form-control'/><br/>
                    <label>Password</label><br/>
                    <input type="password" placeholder='Your password...' value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-dark text-light  form-control'/><br/>
                    <p> <input type="checkbox"  name="remember" />Remember me</p>
                    <input type="button" onClick={saveData}  value='SIGN IN' className='form-control text-light bg-danger' />
                    <p>Already have an account? <b>Sign in</b></p>
                    </from>
                </div>
            </div>
            <div className='col-sm-2 in'></div>
            </div> 
        </div>
    )

}
export default SignUp;
