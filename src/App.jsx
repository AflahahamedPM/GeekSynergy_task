import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NameInput from "./Components/NameInput";
import PasswordInput from "./Components/PasswordInput";
import EmailInput from "./Components/EmailInput";
import ProffessionInput from "./Components/ProffessionInput";
import PhoneInput from "./Components/PhoneInput";
import { useNavigate } from "react-router-dom";

function App() {
  const [selectedProffession,setSelectedProffession] = useState("")
  const navigate = useNavigate()

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const existingData = JSON.parse(localStorage.getItem("userCredentials")) || [];

    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const phoneNumber = formData.get('phoneNumber')
    const proffession = selectedProffession

    const data = {
      name,
      email,
      password,
      phoneNumber,
      proffession
    }

    existingData.push(data)
    localStorage.setItem("userCredentials",JSON.stringify(existingData))    
    setTimeout(()=>{
      navigate("/login")
    },1000)
  })

  return (
    <div className="bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-lg sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-2xl font-bold leading-tight text-blue-950 mb-8 text-center">
                  Create your account
                </h2>
                <div className="flex justify-center items-center h-5/6">
                  <form onSubmit={(e)=>{handleSubmit(e)}} className="grid grid-cols-1">
                    <NameInput />
                    <PasswordInput />
                    <EmailInput />
                    <PhoneInput />
                    <ProffessionInput selectedProffession={selectedProffession} setSelectedProffession={setSelectedProffession}/>
                    <button
                      type="submit"
                      className="w-full bg-blue-950 hover:bg-blue-900 text-white font-semibold py-3 px-8 rounded-lg transition duration-150 ease-in-out"
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
