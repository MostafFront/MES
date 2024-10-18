import { Link } from 'react-router-dom';
import React from 'react'
import firstLogo from '../../assets/platform.svg'
import {useState} from 'react';

export default function LogIn() {


const [email, setEmail] = useState('');

  const getEmail = event => {
    setEmail(event.target.value);

    console.log('value is:', event.target.value);
  };

  const [password, setPassword] = useState('');

  const getPassword = event => {
    setPassword(event.target.value);

    console.log('value is:', event.target.value);
  };

const loginSuccess = ()=>{
    if(true){
      
    }
    
}


  return (
    <>
      <div className='h-[100vh]'>
        <div className=' flex justify-between min-w-full min-h-full bg-[#0043D9]'>
          <div className='relative w-[70%]  flex justify-center items-center '>
            <img src={firstLogo} className='w-[60%]'/>
          </div>
          <div className='w-[30%] flex justify-ceter items-center bg-[#FFFFFF] min-h-full'>
            <form onSubmit={loginSuccess} className=' w-[100%] h-[60%] flex-col flex justify-between items-center gap-y-8'> 
              <div className='flex justify-center items-center gap-x-5 text-[#2D62ED] font-bold text-4xl'>
                <i class="fa-solid fa-industry"></i>
                <p className=' uppercase'>mes</p> 
              </div>   
              <div className='flex flex-col justify-center items-center w-full gap-y-4'>
                <div className="w-[60%] relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <input type="text" id="email-address-icon" 
                    className=" bg-[#FFFFFF99] border border-[#2D62ED] text-gray-900 text-sm rounded-3xl focus:ring-[#0043D9] focus:border-[#0043D9]  w-[100%] p-2.5 text-center"
                     placeholder='elka@qq.com'/>
                </div>
                <div className="w-[60%] relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <i class="fa-solid fa-lock"></i>
                    </div>
                    <input type="password" id="email-address-icon" 
                    className="bg-[#FFFFFF99] border border-[#2D62ED] text-gray-900 text-sm rounded-3xl focus:ring-[#0043D9] focus:border-[#0043D9]  w-[100%] p-2.5 text-center"
                     placeholder='PASSWORD'/>
                </div>
                <Link to={'Dashboard'} type='submit' className=' text-[#FFFFFF] font-medium text-lg border-[#2D62ED] px-5 py-2 border-2 bg-[#2D62ED]  rounded-3xl w-[60%] transition-all hover:bg-[#FFFFFF] hover:text-[#2D62ED] hover:border-[#0043D9] uppercase flex justify-center items-center'>login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
