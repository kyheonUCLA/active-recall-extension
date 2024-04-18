import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RequestMessageType, ResponseMessageType } from '../../assets/types';
import FormInput from '../components/FormInput';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({email: "", password: "", remember: false});

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setLoginData({ ...loginData, [name]: e.target.checked });
    } else {
      setLoginData({ ...loginData, [name]: value });
    }
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    chrome.runtime.sendMessage({ 
      type: "SEND_LOGIN_DATA_REQUEST", 
      body: loginData 
    } as RequestMessageType, (messageRes: ResponseMessageType) => {
      if (messageRes.success) {
        console.log("LOGIN_DATA sucessfully sent to server")
      } else {
        console.log("LOGIN_DATA failed")
      }
    });
  }

  return (
    <section className="bg-gray-300">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-500 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <FormTitle>Sign in to your account</FormTitle>
              <form className="space-y-4 md:space-y-6" onSubmit={handleOnSubmit}>
                <FormInput type="email" name="email" placeholder="name@email.com" onChange={handleOnChange}>Your email</FormInput>
                <FormInput type="password" name="password" placeholder="••••••••" onChange={handleOnChange}>Password</FormInput>
                <FormFooter onChange={handleOnChange}/>
                <button type="submit" className="w-full text-white bg-purple-600 hover:bg-primary-700 
                focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg 
                text-sm px-5 py-2.5 text-center" onClick={()=>{}}>Sign in</button>
            </form>
            <button onClick={()=>navigate('/register')} className="w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an Account</button>
          </div>
        </div>
      </div>
    </section>
  )
}

type FormTitleProps = { children: React.ReactNode }
const FormTitle: React.FC<FormTitleProps> = ({ children }) => {
  return (
    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      {children}
    </h1>
  )
}

type FormFooterProps = { onChange: any }
const FormFooter: React.FC<FormFooterProps> = ({ onChange }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input aria-describedby="remember" type="checkbox" name="remember" onChange={onChange}
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
          focus:ring-primary-300" />
        </div>
        <div className="ml-3 text-sm">
          <label className="text-gray-500 dark:text-gray-300">Remember me</label>
        </div>
      </div>
      <a href="#" className="text-sm font-medium hover:underline">Forgot password?</a>
    </div>
  )
}





export default Login