import React from "react"

type FormInputProps = {
  children: string,
  name: string,
  type: 'email' | 'password' | 'text' | 'tel',
  placeholder: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void, 
}
const FormInput: React.FC<FormInputProps> = ({ children, name, type, placeholder, onChange }) => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900">{children}</label>
      <input type={type} name={type} className="bg-gray-50 border border-gray-300 
      text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
      block w-full p-2.5 " placeholder={placeholder} onChange={onChange}/>
    </>
  )
}

export default FormInput