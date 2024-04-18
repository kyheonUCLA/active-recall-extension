import React, { useState } from 'react'

import FormInput from '../components/FormInput'
import { RequestMessageType, ResponseMessageType } from '../../assets/types';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();

  const [registerationData, setRegisterationData] = useState<any>(
    {
      email: "", 
      password: "", 
      confirmPassword: ""
    })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setRegisterationData({ ...registerationData, [name]: e.target.checked });
    } else {
      setRegisterationData({ ...registerationData, [name]: value });
    }
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    chrome.runtime.sendMessage({ 
      type: "SEND_REGISTRATION_DATA_REQUEST", 
      body: registerationData 
    } as RequestMessageType, (messageRes: ResponseMessageType) => {
      if (messageRes.success) {
        console.log("REGISTERATION_DATA sucessfully sent to server")
      } else {
        console.log("REGISTERATION_DATA failed")
      }
    });
  }

  return (
    <div>
      <section className="bg-gray-300">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-500 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <FormTitle>Sign in to your account</FormTitle>
              <form className="space-y-4 md:space-y-6" onSubmit={handleOnSubmit}>
                <FormInput type="email" name="email" placeholder="name@email.com" onChange={handleOnChange}>Your email</FormInput>
                <FormInput type="password" name="password" placeholder="••••••••" onChange={handleOnChange}>Password</FormInput>
                <FormInput type="password" name="confirmPassword" placeholder="••••••••" onChange={handleOnChange}>Confirm password</FormInput>
                <button type="submit" className="w-full text-white bg-purple-600 hover:bg-primary-700 
                focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg 
                text-sm px-5 py-2.5 text-center">Create an account</button>
              </form>
            <p className="text-sm font-light text-white">
              Already have an account? <a onClick={() => navigate('/')} className="font-medium cursor-pointer text-purple-600 hover:underline">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
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


export default Register