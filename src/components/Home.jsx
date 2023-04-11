import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';

const Home = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
const nav=useNavigate();
    const[data,setDate] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users').then((result)=>{
            result.json().then((resp)=>{
                setDate(resp)
            })
        })
    },[])
    function submitData(){
        data.forEach((el)=>{
        if(el.email==email && el.password==password){
           
       window.localStorage.setItem("st",JSON.stringify(email))
         nav('/show')

        }
        })
         
    }
    return (
        <div>

        <div className='row'>
         <div className='col-sm-7 p'>
             <p className='display-6 text-center '>INSPIRED BY THE FUTURE:</p>
             <h4 className='text-light text-center'>THE VISION UI DASHBOARD</h4>
         </div>
         <div className='col-sm-5 in'>
             <div className='row p-5 '>
             <from>
                 <h1>Nice to see you!</h1>
                 <p>Enter your email and password to sign in</p>
                 <label>Gmail</label><br/>
                 <input type="email" placeholder='Your email...' value={email} onChange={(e)=>{setEmail(e.target.value)}} className='form-control bg-dark w-50 text-light' style={{"borderRadius":"10px"}}  /><br/>
                 <label>Password</label><br/>
                 <input type="password" placeholder='Your password...' value={password} onChange={(e)=>{setPassword(e.target.value)}} className='form-control bg-dark w-50 text-light' style={{"borderRadius":"10px"}} /><br/>
                 <p> <input type="checkbox" />Remember me</p>
                 <button  className='btn btn-danger form-control w-50' onClick={submitData}  >SignIn</button>
                 <p>Don't have account? <b>Signup</b></p>
                 <br/><br/>
                 <p>&copy; Made with by Simple & Creative Timfcr a better </p>
                 <p style={{paddingLeft:"80px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Marketplace &nbsp;&nbsp;&nbsp;&nbsp;Blog&nbsp;&nbsp;&nbsp;&nbsp;Licaron</p>
             </from>
             </div>
         </div>
         </div> 
     </div>
    )

}
export default Home;
